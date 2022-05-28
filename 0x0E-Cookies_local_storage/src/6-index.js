const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
const sessionStorageAvailable = typeof sessionStorage === 'object';

const createStore = () => {
  const store = document.createElement('ul');
  availableItems.map((element) => {
    const item = document.createElement('li');
    item.innerHTML = element;
    item.addEventListener('click', () => {
      addItemToCart(element);
    });
    store.append(item);
  });
  document.body.append(store);
};
const displayCart = () => {
  if (sessionStorage.length === 0) return;
  const quantityMessage = document.createElement('p');
  quantityMessage.innerHTML = `You previously had ${sessionStorage.length} items in your cart`;
  document.body.append(quantityMessage);
};

const addItemToCart = (item) => {
  sessionStorage.setItem(item, true);
};

window.onload = () => {
  if (!sessionStorageAvailable) {
    alert(
      'Sorry, your browser does not support web storage. Try again with a better one'
    );
    return;
  }
  const { sessionStorage } = window;

  createStore();
  displayCart();
};
