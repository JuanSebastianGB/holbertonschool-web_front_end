const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
const localStorageAvailable = typeof sessionStorage === 'object';

const getCartFromStorage = () => {};

const addItemToCart = (item) => {
  if (sessionStorage.getItem(item))
    sessionStorage.setItem(item, parseInt(sessionStorage.getItem(item)) + 1);
  else sessionStorage.setItem(item, 1);

  displayCart();
};

const removeItemFromCart = (item) => {
  sessionStorage.removeItem(item);
  displayCart();
};

const updateCart = () => {
  const headerTag = document.querySelector('.head-content');
  const lengthIs = sessionStorage.length;
  if (lengthIs === 0) {
    headerTag.innerHTML = 'Your cart is empty';
    sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
  }

  const unorderedList = document.createElement('ul');
  const cartContainer = document.querySelector('.cart-content');
  availableItems.map((element) => {
    if (sessionStorage.getItem(element)) {
      const item = document.createElement('li');
      item.onclick = () => removeItemFromCart(element);

      item.innerText = `${element} x ${sessionStorage.getItem(
        element
      )} (remove)`;
      unorderedList.append(item);
    }
  });
  cartContainer.append(unorderedList);
};

const displayCart = () => {
  let headerTag = document.querySelector('.head-content');
  if (!headerTag) {
    headerTag = document.createElement('h2');
    headerTag.classList.add('head-content');
    headerTag.innerHTML = 'Your cart:';
  }

  let divContainer = document.querySelector('.cart-content');
  if (divContainer) divContainer.remove();

  divCartContainer = document.createElement('div');
  divCartContainer.classList.add('cart-content');

  document.body.appendChild(headerTag);
  document.body.append(divCartContainer);

  updateCart();
};

const createStore = () => {
  const availableProductsHeader = document.createElement('h2');
  availableProductsHeader.innerText = 'Available products:';
  const unorderedList = document.createElement('ul');
  availableItems.map((element) => {
    const listItem = document.createElement('li');
    listItem.innerText = element;
    listItem.onclick = () => addItemToCart(element);
    unorderedList.appendChild(listItem);
  });
  document.body.append(availableProductsHeader);
  document.body.append(unorderedList);
};

const preProcessData = () => {
  const sessionData = Object.keys(sessionStorage);
  sessionData.map((element) =>
    availableItems.includes(element) ? '' : sessionStorage.removeItem(element)
  );
};

window.onload = () => {
  if (!localStorageAvailable) {
    alert(
      'Sorry, your browser does not support web storage. Try again with a better one'
    );
    return;
  }
  preProcessData();
  createStore();
  displayCart();
};
