const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

const keys = Object.keys(user);

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
