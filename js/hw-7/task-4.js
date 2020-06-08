const countRef = document.querySelector('#counter');
const valRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);