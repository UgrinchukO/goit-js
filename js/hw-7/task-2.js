const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingRef = document.querySelector('#ingredients');

const create = item => {
  const crtList = document.createElement('li');
  crtList.textContent = item;
  return crtList;
};

const ingredientsRef = ingredients.map(product => create(product));
ingRef.append(...ingredientsRef);
