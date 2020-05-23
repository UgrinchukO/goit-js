import Users from './users.js';

const getInactiveUsers = users => {
  const inactiveUsers = users
    .filter(user => user.isActive === false)
    .map(user => ({ Inactive: user.name }));
  return inactiveUsers;
};

console.log(getInactiveUsers(Users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
