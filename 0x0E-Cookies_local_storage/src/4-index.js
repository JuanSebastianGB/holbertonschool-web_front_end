const setCookies = () => {
  const button = document.querySelector('.login-button');
  button.addEventListener('click', () => {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    Cookies.set('firstname', firstName, { expires: 10, path: '' });
    Cookies.set('email', email, { expires: 10, path: '' });
    showWelcomeMessageOrForm();
  });
};

const showForm = () => {
  const form = document.querySelector('.login-form');
  form.style.display = 'block';
};

const hideForm = () => {
  const form = document.querySelector('.login-form');
  form.style.display = 'none';
};

const deleteCookiesAndShowForm = () => {
  Cookies.remove('firstname');
  Cookies.remove('email');
  const messageContainer = document.querySelector('.message-container');
  messageContainer.style.display = 'none';
  showForm();
};

function showWelcomeMessageOrForm() {
  const { get: getCookie } = Cookies;
  const firstName = getCookie('firstname');
  const email = getCookie('email');
  if (firstName && email) {
    hideForm();
    let messageContainer = document.querySelector('.message-container');
    if (!messageContainer) {
      messageContainer = document.createElement('h1');
      messageContainer.className = 'message-container';
      const message = `Welcome ${firstName} <span class='log-out'>(logout)</span>`;
      messageContainer.innerHTML = message;
      document.querySelector('body').append(messageContainer);

      const logOutButton = document.querySelector('.log-out');

      logOutButton.style.cursor = 'pointer';
      logOutButton.style.fontSize = '10px';
      logOutButton.style.fontStyle = 'italic';

      logOutButton.addEventListener('click', () => {
        deleteCookiesAndShowForm();
      });
    } else {
      messageContainer.style.display = 'block';
    }
  } else showForm();
}

window.onload = () => {
  setCookies();
};
