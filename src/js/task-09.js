const bodeEl = document.querySelector('body');
const btnEl = document.querySelector('button');
const spanColorEl = document.querySelector('.color');
btnEl.addEventListener('click', onClick);
function onClick() {
  const color = getRandomHexColor();
  bodeEl.style.background = color;
  spanColorEl.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
