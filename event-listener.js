const controller = new AbortController();
const { signal } = controller;

window.addEventListener('mousemove', log, { signal });
window.addEventListener('mouseup', removeListeners, { signal });

function log() {
	console.log('Mouse moved');
}

function removeListeners() {
	// window.removeEventListener('mousemove', log);
	// window.removeEventListener('mouseup', removeListeners);
	controller.abort();
}
