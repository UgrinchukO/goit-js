const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);

  let totalEmployee = values[0];
  let bestEmployeeName = keys[0];

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > totalEmployee) {
      totalEmployee = values[i];
      bestEmployeeName = keys[i];
    }
  }
  return bestEmployeeName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
