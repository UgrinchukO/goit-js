import Users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const colorEyes = users
    .filter(user => user.eyeColor === color)
    .map(user => ({ eyeColor: user.name }));
  return colorEyes;
};

console.log(getUsersWithEyeColor(Users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
