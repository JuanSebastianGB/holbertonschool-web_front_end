const addPostRow = (data) => {
  const { id, title, author } = data;
  const paragraph = `<p>Post created with id ${id}, title: ${title}, author: ${author}</p>`;
  $('body').append(paragraph);
};

const listPosts = async () => {
  const request = await $.get('http://localhost:3000/posts');
  request.map((element) => addPostRow(element));
};
$(document).ready(function () {
  listPosts();
});
