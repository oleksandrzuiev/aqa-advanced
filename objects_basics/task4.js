const person = {
  firstName: 'Ihor',
  lastName: 'Podielnikov',
  age: 39,
};

person.email = 'ihor@test.com';
delete person.age;

console.log(person);
