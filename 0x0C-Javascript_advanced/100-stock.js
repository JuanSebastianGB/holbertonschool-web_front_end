
const stock = {
  macbook: 2,
  iphone: 4
};

const processPayment = (itemName) => {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
};

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
};

const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);
  const item = itemName.toLowerCase();
  if (stock[item] > 0) { callbackPayment(item); } else { callbackError(item); }
};

const item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(item, processPayment, processError);
