'use strict';

let menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('open');
	e.currentTarget.classList.toggle('close');

	let main = document.getElementsByTagName('main')[0];

	main.classList.toggle('open_menu');
});