const valueLink = document.querySelector('#value');
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
function plusOne() {
  counterValue -= 1;
  console.log((valueLink.textContent = counterValue));
}
function minusOne() {
  counterValue += 1;
  console.log((valueLink.textContent = counterValue));
}
btnDecrementEl.addEventListener('click', plusOne);
btnIncrementEl.addEventListener('click', minusOne);
