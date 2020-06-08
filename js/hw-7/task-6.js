const inputRef = document.querySelector('#validation-input');
const lengthValRef = Number(inputRef.getAttribute(['data-length']));

const inpValidRef = e => {
  e.target.classList.add('valid');
  e.target.classList.remove('invalid');
};

const inpInValidRef = e => {
  e.target.classList.add('invalid');
  e.target.classList.remove('valid');
};

inputRef.addEventListener('change', e => {
  if (e.target.value.length === lengthValRef) {
    inpValidRef(e);
    return;
  }
  inpInValidRef(e);
});
