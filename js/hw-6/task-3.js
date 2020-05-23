import Users from './users.js';

const getUsersWithGender = (users, gender) => {
  const namesUser = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return namesUser;
};

console.log(getUsersWithGender(Users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
