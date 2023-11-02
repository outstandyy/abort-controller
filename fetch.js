/* Fetch requests */
// const fetch = require('node-fetch');
const controller = new AbortController();
const url = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchTodo = async () => {
	console.log('fetchTodo');
	try {
		const response = await fetch(url, { signal: controller.signal });
		const todo = await response.json;
		console.log(todo);
		return todo;
	} catch (e) {
		if (e.name === 'AbortError') {
			console.log('Aborted: ', e);
		}
		console.log(e);
	}
}

fetchTodo();
controller.abort();
