const addPostRow = (data) => {
  const { id, title, author } = data;
  const paragraph = `<p>Post created with id ${id}, title: ${title}, author: ${author}</p>`;
  $('body').append(paragraph);
};

const listPosts = async () => {
  const request = await $.get('http://localhost:3000/posts');
  request.map((element) => addPostRow(element));
};

const sendForm = () => {
  $('form').submit(function (e) {
    e.preventDefault();
    const message = '<p>About to send the query to the API</p>';
    $(this).after(message);
    const data = new FormData(document.querySelector('form'));
    const newData = [...data];
    console.log(data);
    console.log(newData);
  });
};

const buildForm = () => {
  let form = `
    <form>
      <div>
        <label for="author">Author</label>
        <input type="text" id="author">
      </div>
      <div>
        <label for="title">Title</label>
        <textarea id="title" cols="12" rows="2"></textarea>
      </div>
      <input type="submit" value="Submit">
    </form>
  `;

  $('body').prepend(form);

  sendForm();
};
$(document).ready(function () {
  listPosts();
  buildForm();
});
