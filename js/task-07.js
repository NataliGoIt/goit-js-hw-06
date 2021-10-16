const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function changeSize() {
  textEl.style.fontSize = `${fontSizeEl.value}px`;
}

fontSizeEl.addEventListener('input', changeSize);
