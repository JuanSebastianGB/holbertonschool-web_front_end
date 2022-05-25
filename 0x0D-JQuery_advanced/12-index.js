const API_URL = 'http://localhost:3000/posts';
const addPostRow = (data) => {
  const { id, title, author } = data;
  const paragraph = `<p id="row-${id}"><span onclick="deletePost(${id})">(delete)<span/>Post created with id ${id}, title: ${title}, author: ${author}</p>`;
  $('body').append(paragraph);
};

const listPosts = async () => {
  const request = await $.get(API_URL);
  request.map((element) => addPostRow(element));
};

const buildForm = () => {
  let form = `
    <form class='form'>
      <div>
        <label for="author">Author</label>
        <input type="text" id="author" name="author">
      </div>
      <div>
        <label for="title">Title</label>
        <textarea id="title" name="title" cols="12" rows="2"></textarea>
      </div>
      <input type="submit" value="Submit">
    </form>
  `;

  $('body').prepend(form);

  sendForm();
};

function sendForm() {
  $('.form').submit(async function (e) {
    const message = '<p>About to send the query to the API</p>';
    $('.form').after(message);
    let data = $(this).serializeArray();
    const dataObject = Object.fromEntries(
      data.map((element) => [element.name, element.value])
    );
    try {
      const response = await $.post(API_URL, dataObject);
      if (response) addPostRow(dataObject);
    } catch (error) {
      alert('Error sending the POST query');
    }

    e.preventDefault();
  });
}
const deletePost = async (id) => {
  const url = `${API_URL}/${id}`;
  const dataObject = {
    url,
    method: 'DELETE',
    dataType: 'json',
  };
  try {
    const response = await $.ajax(dataObject);
    if (response) $(`#row-${id}`).remove();
  } catch (error) {
    alert('Post was not deleted');
  }
};
$(document).ready(function () {
  listPosts();
  buildForm();
});
