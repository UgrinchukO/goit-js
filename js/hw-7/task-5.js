const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const entTextRef = () => {
  const deFault = 'незнакомец';
  outputRef.textContent = event.target.value;
  if (!event.target.value) {
    outputRef = deFault;
  }
};

inputRef.addEventListener('input', entTextRef);
