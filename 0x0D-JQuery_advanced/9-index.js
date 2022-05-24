const createSearchForm = () => {
  const form = `
  <form action="">
    <input type="text">
    <input type="submit" value="Submit  ">
    <ul class='articles loading'></ul>
    <ul class='pagination'
      style="display:flex;
      flex-direction:row;
      list-style: none;">
    </ul>
  </form>
  `;
  $('body').prepend(form);
};

const addNewArticle = (id, title, snippet) => {
  const customLi = `
  <li>
    <p><span>${id} - ${title}</span></p>
    <p>${snippet}</p>
  </li>
  `;
  $('.articles').append(customLi);
};

function queryWikipedia(search, offset = 0) {
  const request = new XMLHttpRequest();

  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&utf8=&format=json&origin=*&sroffset=${offset}`;
  request.open('GET', url, true);
  displayLoading(true);
  request.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = await JSON.parse(request.response);
      let { totalhits: totalItems } = response.query.searchinfo;
      // Clear to the news articles
      $('.articles').html('');
      let { search: results } = response.query;
      console.log(results);
      results.map((element) => {
        let { pageid: id, title, snippet: text } = element;
        addNewArticle(id, title, text);
      });

      displayLoading(false);
      buildPagination(totalItems, 10, offset);
    }
  };
  request.send();
}

const buildPagination = (numberOfItems, itemsPerPage, currentOffset) => {
  $('.pagination').html('');
  let numberOfTags = numberOfItems / itemsPerPage;
  numberOfTags = 100;
  for (let i = 0; i < numberOfTags; ++i) {
    let list =
      '<li class="page" style="cursor: pointer; font-size: 1rem; margin-left: .5rem; ';
    if (i != currentOffset) list += '">' + i;
    else list += 'font-weight: bold; font-size: 2rem">' + currentOffset;

    list += '</li>';
    $('.pagination').append(list);
  }

  moveToPage();
};

function moveToPage() {
  $('.page').on('click', function (e) {
    e.preventDefault();

    const offset = $(this).text();
    const query = localStorage.getItem('controlInfo');
    queryWikipedia(query, offset);
  });
}

const handleSubmit = () => {
  $('form').submit(function async(e) {
    e.preventDefault();
    const content = $('form input').first().val();
    queryWikipedia(content, 0);
    localStorage.setItem('controlInfo', content);
  });
};

function displayLoading(loading) {
  if (loading === true) {
    $('.loading').wrap('<div></div>');
    $('.loading').removeClass('true');
    $('.loading').addClass('false');
    $('.loading').css('opacity', '0.2');
  } else if (loading === false) {
    $('.loading').unwrap();
    $('.loading').removeClass('false');
    $('.loading').addClass('true');
    $('.loading').css('opacity', '1');
  } else console.log('Error');
}

$(document).ready(function () {
  createSearchForm();
  handleSubmit();
});
