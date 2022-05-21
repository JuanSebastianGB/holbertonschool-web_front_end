const createElement = (data) => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
};

const queryWikipedia = (callback) => {
  const request = new XMLHttpRequest();
  const URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  request.open('GET', URL, true);
  request.onreadystatechange = function (event) {
    if (request.readyState === 4) {
      if (request.status === 200) { callback(JSON.parse(request.responseText).query.pages[21721040].extract); } else {
        const error = new Error('Error');
        return callback(error, null);
      }
    }
  };
  request.send();
};

queryWikipedia(createElement);
