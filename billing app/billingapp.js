// get references to the products section and the "Add New" button
const productsSection = document.getElementById('products');
const addProductButton = document.getElementById('addProduct');

// add an event listener to the "Add New" button
addProductButton.addEventListener('click', function() {
  // get the number of products already added
  const numProducts = productsSection.querySelectorAll('.product').length;

  // create a new product div
  const newProductDiv = document.createElement('div');
  newProductDiv.className = 'product';

  // create labels and input fields for product ID and quantity
  const idLabel = document.createElement('label');
  idLabel.setAttribute('for', `product${numProducts + 1}`);
  idLabel.textContent = `Product ${numProducts + 1} ID:`;
  const idInput = document.createElement('input');
  idInput.setAttribute('type', 'text');
  idInput.setAttribute('id', `product${numProducts + 1}`);
  idInput.setAttribute('name', `products[${numProducts + 1}][id]`);
  idInput.required = true;

  const quantityLabel = document.createElement('label');
  quantityLabel.setAttribute('for', `quantity${numProducts + 1}`);
  quantityLabel.textContent = 'Quantity:';
  const quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('id', `quantity${numProducts + 1}`);
  quantityInput.setAttribute('name', `products[${numProducts + 1}][quantity]`);
  quantityInput.required = true;

  // append the labels and input fields to the new product div
  newProductDiv.appendChild(idLabel);
  newProductDiv.appendChild(idInput);
  newProductDiv.appendChild(quantityLabel);
  newProductDiv.appendChild(quantityInput);

  // append the new product div to the products section
  productsSection.appendChild(newProductDiv);
});
