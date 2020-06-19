//start
// function expression to select elements
const selectElement = (s) => document.querySelector(s);
//open the menu click
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});
//clsoe the menu click
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});