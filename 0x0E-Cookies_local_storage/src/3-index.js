const setCookies = () => {
  const button = document.querySelector('.login-button');
  button.addEventListener('click', () => {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const expireCookieTime = `max-age=864000`;
    document.cookie = `firstname=${firstName}; ${expireCookieTime}; path=src/`;
    document.cookie = `email=${email}; ${expireCookieTime}; path=src/`;
    showWelcomeMessageOrForm();
  });
};

const getCookie = (name) => {
  const { cookie } = document;
  const splittedCookie = cookie.split('; ');
  for (let i = 0; i < splittedCookie.length; i++) {
    const splittedElement = splittedCookie[i].split('=');
    if (splittedElement[0] === name) return splittedElement[1];
  }
  return '';
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
  const expireCookieTime = `max-age=0`;
  document.cookie = `firstname=; ${expireCookieTime}; path=src/`;
  document.cookie = `email=; ${expireCookieTime}; path=src/`;
  const messageContainer = document.querySelector('.message-container');
  messageContainer.style.display = 'none';

  showForm();
};

function showWelcomeMessageOrForm() {
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
