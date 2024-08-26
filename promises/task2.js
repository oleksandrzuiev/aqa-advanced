const BASE_URL = 'https://jsonplaceholder.typicode.com';

function fetchToDoById(id) {
  return fetch(`${BASE_URL}/todos/${id}`)
    .then((response) => response.json())
    .catch((e) => { console.log(e); });
}

function fetchUserById(id) {
  return fetch(`${BASE_URL}/users/${id}`)
    .then((response) => response.json())
    .catch((e) => { console.log(e); });
}

let promiseAll;
let promiseRace;

Promise.all([
  fetchToDoById(1),
  fetchUserById(1),
])
  .then((result) => promiseAll = result) // assign the result of Promise.all to variable promiseAll
  .then((promiseAll) => console.log('Result of Promise.all:', promiseAll));

Promise.race([
  fetchToDoById(1),
  fetchUserById(1),
])
  .then((result) => promiseRace = result) // assign the result of Promise.race to variable promiseRace
  .then((promiseRace) => console.log('Result of Promise.race:', promiseRace));
