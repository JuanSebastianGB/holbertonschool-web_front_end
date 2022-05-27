const setCookies = () => {
  const button = document.querySelector('.set-cookies-button');
  button.addEventListener('click', () => {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const expireCookieTime = `max-age=864000`;
    document.cookie = `firstname=${firstName}; ${expireCookieTime}; path=src/`;
    document.cookie = `email=${email}; ${expireCookieTime}; path=src/`;
  });
};

const showCookies = () => {
  const button = document.querySelector('.get-cookies-button');
  button.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Cookies: ${document.cookie}`;
    document.querySelector('body').append(paragraph);
  });
};

window.onload = () => {
  setCookies();
  showCookies();
};
