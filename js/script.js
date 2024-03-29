let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', function () {
	headerMenu.classList.toggle('header__menu--open');
	burger.classList.toggle('burger--active');
});

let headerLinks = document.querySelectorAll('.header__menu a');

for (let headerLink of headerLinks) {
	headerLink.addEventListener('click', function () {
		headerMenu.classList.remove('header__menu--open');
		burger.classList.toggle('burger--active');
	});
}

/*==================================== Animation ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll); //событие при котором будет происходить анимация
	function animOnScroll() {		//создаём функцию
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];			// получаем каждый элемент в цикле
			let animItemHeight = animItem.offsetHeight; //получаем высоту этого элемента
			let animItemOffset = offset(animItem).top;	//позиция элемента относительно верха
			let animStart = 4//коэффициент, который будет регулировать момент старта анимации
			//Настройка момента старта анимации:
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			//Бывает, что элемент выше окна, поэтому нужно проверить:
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}


		}
	}
	function offset(elem) {
		let rect = elem.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	animOnScroll();

}

/*==================================== PRELOADER ====================================*/

window.onload = function () {
	setTimeout(function () {
		document.querySelector('.preloader-wrapper').style.display = "none";
	}, 400);
};

window.addEventListener('load', function () {
	let header = document.querySelector('.header');
	header.classList.add('header--loaded');
	burger.classList.add('burger--loaded');

	let loadings = document.querySelectorAll('.loading');
	for (let loading of loadings) {
		loading.classList.add('anim-item--active');

	}
});