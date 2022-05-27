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
const getCookie = (name) => {
  const { cookie } = document;
  const splittedCookie = cookie.split('; ');
  for (let i = 0; i < splittedCookie.length; i++) {
    const splittedElement = splittedCookie[i].split('=');
    if (splittedElement[0] === name) return splittedElement[1];
  }
  return '';
};
const showCookies = () => {
  const button = document.querySelector('.get-cookies-button');
  button.addEventListener('click', () => {
    alert(document.cookie);
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Email: ${getCookie(
      'email'
    )} - Firstname: ${getCookie('firstname')}`;
    document.querySelector('body').append(paragraph);
  });
};

window.onload = () => {
  setCookies();
  showCookies();
};
