const xhr = new XMLHttpRequest();
const method = "GET";
const isCancel = true;
const url = "https://jsonplaceholder.typicode.com/todos/1";
xhr.open(method, url, true);

xhr.send();

if (isCancel) {
	xhr.abort();
}
