const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchToDoById(id) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    const bodyJson = await response.json();
    return bodyJson;
  } catch (e) {
    console.log(e);
  }
}

async function fetchUserById(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const bodyJson = await response.json();
    return bodyJson;
  } catch (e) {
    console.log(e);
  }
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
