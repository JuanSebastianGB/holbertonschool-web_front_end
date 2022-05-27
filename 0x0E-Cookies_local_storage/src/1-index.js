const setCookies = () => {
  const button = document.querySelector('.set-cookies-button');
  button.addEventListener('click', () => {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const expireCookieTime = `Sat, 29 may 2022 12:00:00 UTC`;
    document.cookie = `firstname=${firstName}, expires=${expireCookieTime}`;
    document.cookie = `email=${email}, ${expireCookieTime}`;
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
