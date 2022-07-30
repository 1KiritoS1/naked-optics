import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

$(function() {
	//* --- AOS Animation --- *//
	AOS.init({
  		easing: 'ease-in-out'
	});


	//* --- Sticky Nav --- *// 
	// const stickyNavTop = $('.header__menu').offset().top;

	// const stickyNav = function() {
	// 	let scrollTop = $(window).scrollTop();

	// 	if (scrollTop > stickyNavTop) { 
	// 		$('.header__menu').addClass('sticky');
	// 	} else {
	// 		$('.header__menu').removeClass('sticky'); 
	// 	}
	// };
	// $(window).scroll(function() {
	// 	stickyNav();
	// });


	//* --- Tabs --- *//
	const tabButtons = $('.nav-sub-menu__item a');
	const tabItems = $('.sub-menu__items');
	Array.from(tabButtons).forEach(onTabClick);
	
	function onTabClick(button) {
		button.addEventListener('click', function(e) {
			e.preventDefault();

			let currentButton = button;
			let tabId = button.getAttribute('data-tab');
			let currentItem = document.querySelector(tabId);

			if (!currentButton.classList.contains('active')) {
				Array.from(tabButtons).forEach(function(button) {
					button.classList.remove('active');
				});

				Array.from(tabItems).forEach(function(item) {
					item.classList.remove('active');
				});
		
				currentButton.classList.add('active');
				currentItem.classList.add('active');
			}
		});
	}
	for (let i = 0; i < 1; i++) {
		tabButtons[0].click();
	}
	

	//* --- Slick Slider --- *//
	$('.stories__items').slick({
		infinite: true,
		dots: false,
		arrows: false,
		centerMode: true,
  		variableWidth: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 1400,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1
	});


	//* --- Media --- *//
	if (document.body.clientWidth < 420) {
		$('.header__logo').attr('src', 'img/favicon.svg');
	}
	

	//* --- Burger --- */
	const burger = document.querySelector('.header__burger');
	const navBurger = document.querySelector('.nav-icons__burger');

	const burgerMenu = document.querySelector('.nav');
	const navMenu = document.querySelector('.nav-icons');

	const burgerList = [burger, burgerMenu];
	const burgerNavList = [navBurger, navMenu];

	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		});
		
		for (let i = 0; i < burgerList.length; i++) {
			if (burgerList[i].classList.contains('active')) {
				document.body.style.overflow = 'hidden';
				document.documentElement.style.scrollBehavior = 'auto';
			} else {
				document.body.style.overflow = 'auto';	
				document.documentElement.style.scrollBehavior = 'smooth';
			}
		}
	});
	navBurger.addEventListener('click', () => {
		burgerNavList.forEach((e) => {
			e.classList.toggle('active');
		});
	});

	const navLinks = document.querySelectorAll('.nav__link');
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			document.body.style.overflow = 'auto';	
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = 'smooth';	
			}, 1000);
		});
	});
});

