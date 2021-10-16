const inputValidRef = document.querySelector('#validation-input');
const inputLengthRef = Number(inputValidRef.getAttribute('data-length'));
inputValidRef.addEventListener('blur', onсhecklength);
function onсhecklength(value) {
  if (value.currentTarget.value.length === inputLengthRef) {
    inputValidRef.classList.remove('invalid');
    inputValidRef.classList.add('valid');
  } else {
    inputValidRef.classList.add('invalid');
    inputValidRef.classList.remove('valid');
  }
}
