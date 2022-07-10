// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceNumber = price.innerHTML;

  const quantity = product.querySelector('.quantity input');
  const quantityNumber = quantity.value;
  const subTotal = product.querySelector('.subtotal span')
  const subTotalCalc = priceNumber * quantityNumber;
  
  subTotal.innerHTML = subTotalCalc;
  return subTotalCalc;
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let totalSum = 0;

  // ITERATION 2
  const products = document.querySelectorAll(".product");

  products.forEach((singleProduct)=>{
    subtotal= updateSubtotal(singleProduct);
    totalSum += subtotal;
  })

  // ITERATION 3  
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
