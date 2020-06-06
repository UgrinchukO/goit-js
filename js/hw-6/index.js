// import Users from './users.js';

// console.log('===============Task-1================');

// const getUserNames = users => {
//   const userNames = users.map(user => user.name);
//   return userNames;
// };

// console.log(getUserNames(Users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// console.log('===============Task-2================');

// const getUsersWithEyeColor = (users, color) => {
//   const colorEyes = users
//     .filter(user => user.eyeColor === color)
//     .map(user => ({ eyeColor: user.name }));
//   return colorEyes;
// };

// console.log(getUsersWithEyeColor(Users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// console.log('===============Task-3================');

// const getUsersWithGender = (users, gender) => {
//   const namesUser = users
//     .filter(user => user.gender === gender)
//     .map(user => user.name);
//   return namesUser;
// };

// console.log(getUsersWithGender(Users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// console.log('===============Task-4================');

// const getInactiveUsers = users => {
//   const inactiveUsers = users
//     .filter(user => user.isActive === false)
//     .map(user => ({ Inactive: user.name }));
//   return inactiveUsers;
// };

// console.log(getInactiveUsers(Users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// console.log('===============Task-5================');

// const getUserWithEmail = (users, email) => {
//   const player = users.find(user => user.email === email);
//   console.log(player);
// };

// console.log(getUserWithEmail(Users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(Users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// console.log('===============Task-6================');

// const getUsersWithAge = (users, min, max) => {
//   const ageUser = users
//     .filter(user => user.age > min && user.age < max)
//     .map(user => ({ Player: user.name }));
//   return ageUser;
// };

// console.log(getUsersWithAge(Users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(Users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// console.log('===============Task-7================');

// const calculateTotalBalance = users => {
//   const total = users.reduce(
//     (totalBalance, user) => totalBalance + user.balance,
//     0,
//   );
//   return total;
// };

// console.log(calculateTotalBalance(Users)); // 20916

// console.log('===============Task-8================');

// const getUsersWithFriend = (users, friendName) => {
//   const nameFriend = users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
//   return nameFriend;
// };

// console.log(getUsersWithFriend(Users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(Users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// console.log('===============Task-9================');

// const getNamesSortedByFriendsCount = users => {
//   const sortedFriends = users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
//   return sortedFriends;
// };

// console.log(getNamesSortedByFriendsCount(Users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// console.log('===============Task-10================');

// const getSortedUniqueSkills = users => {
//   const sortedSkills = users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .sort()
//     .filter((skill, i, array) => {
//       return array.indexOf(skill) === i;
//     });
//   return sortedSkills;
// };

// console.log(getSortedUniqueSkills(Users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
