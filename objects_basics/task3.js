const car1 = {
  brand: 'Suzuki',
  model: 'SX4',
  year: 2019,
};

const car2 = {
  brand: 'Toyota',
  model: 'Aygo',
  owner: 'Anna Doe',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
