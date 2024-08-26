import TodoController from './TodoController.js';
import UserController from './UserController.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const todoController = new TodoController(BASE_URL);
todoController.fetchToDoById(1).then((result) => console.log(result));

const userController = new UserController(BASE_URL);
userController.fetchUserById(1).then((result) => console.log(result));
