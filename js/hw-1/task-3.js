const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let pass = prompt('Please enter your password:');

if (pass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (pass === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log();
}

alert(message);
