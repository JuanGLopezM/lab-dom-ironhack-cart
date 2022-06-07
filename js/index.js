// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceNumber = price.innerText;

  const quantity = product.querySelector('.quantity input');
  const quantityNumber = quantity.value;
  let subTotalCalc = priceNumber * quantityNumber;
  let subTotal = product.querySelector('.subtotal span')
  subTotal.innerText = subTotalCalc;
  return subTotal.innerText;
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let sumatorio = 0

  // ITERATION 2
  const allItems = document.querySelectorAll(".product");
  allItems.forEach((item)=>{updateSubtotal(item)})

  /*const allItems = document.querySelectorAll(".product");
  allItems.forEach((item)=>{
    let subTotal = updateSubtotal(item);
    sumatorio +=subTotal;
    console.log(subtotal)*/
  // ITERATION 3
  //... your code goes here



  const productsElements= document.querySelectorAll('.product');
  let subtotal = updateSubtotal(productsElements[0]);
  let totalElement = document.querySelector('#total-value span');
  totalElement.innerText = subtotal;
  // faltan adjudicar los valores del sumatorio en la caja del Total

}







// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
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
