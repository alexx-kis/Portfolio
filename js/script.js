let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', function () {
	headerMenu.classList.toggle('header__menu--open');
	burger.classList.toggle('burger--active')
});

let headerLinks = document.querySelectorAll('.header__menu a');

for (let headerLink of headerLinks) {
	headerLink.addEventListener('click', function () {
		headerMenu.classList.remove('header__menu--open');
	});
}