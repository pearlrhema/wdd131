// const mainnav = document.querySelector('.navigation')
// const hambutton = document.querySelector('#menu');

// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});