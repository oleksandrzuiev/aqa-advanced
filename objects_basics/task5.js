const users = [
  { name: 'Ihor', email: 'ihor@test.com', age: 30 },
  { name: 'Anna', email: 'anna@test.com', age: 25 },
  { name: 'Daryna', email: 'daryna@test.com', age: 9 },
];

console.log('Without destructing');
for (const user of users) {
  console.log(`Name is ${user.name}, Email is ${user.email}, Age is ${user.age}`);
}

console.log('With destructing');
for (const { name, email, age } of users) {
  console.log(`Name is ${name}, Email is ${email}, Age is ${age}`);
}
