import Users from './users.js';

const getUserNames = users => {
  const userName = users.map(user => user.name);
  return userName;
};

console.log(getUserNames(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
