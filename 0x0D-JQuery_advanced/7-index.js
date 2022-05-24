const createSearchForm = () => {
  const form = `
  <form action="">
    <input type="text">
    <input type="submit" value="Submit  ">
    <ul></ul>
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
  $('ul').append(customLi);
};

function queryWikipedia(search) {
  const request = new XMLHttpRequest();

  let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${search}&origin=*`;
  request.open('GET', url, true);

  request.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = await JSON.parse(request.response);
      response = Object.values(response.query.pages)[0];
      addNewArticle(response.pageid, response.title, response.extract);
    }
  };
  request.send();
}

const handleSubmit = () => {
  $('form').submit(function async(e) {
    e.preventDefault();
    const content = $('form input').first().val();
    queryWikipedia(content);
  });
};

$(document).ready(function () {
  createSearchForm();
  handleSubmit();
});
