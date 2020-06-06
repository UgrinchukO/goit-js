const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galRef = document.querySelector('#gallery');

const createGal = item => {
  const listRef = document.createElement('li');
  listRef.classList.add('item_gal');
  const imageRef = document.createElement('img');
  imageRef.classList.add('img_gal');
  imageRef.src = item.url;
  imageRef.alt = item.alt;
  listRef.append(imageRef);
  return listRef;
};

const galleryRef = images.map(image => createGal(image))
galRef.append(...galleryRef)
