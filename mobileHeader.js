// const
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
	window.pageYOffset >= 47
		? nav.classList.add("nav-color")
		: nav.classList.remove("nav-color");
});

// search-box open close js code
let navbar = document.querySelector(".nav-header");

// sidebar open close js code
let navLinks = document.querySelector(".menu-links");
let menuOpenBtn = document.querySelector(".nav-header .bx-menu");
let menuCloseBtn = document.querySelector(".menu-links .bx-x");
menuOpenBtn.onclick = function () {
	navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
	navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
	navLinks.classList.toggle("show1");
};

let jsArrow = document.querySelectorAll(".js-arrow");
jsArrow.forEach((arrow) => {
	arrow.onclick = function (e) {
		// navLinks.classList.toggle("show3");
		e.target.parentElement.children[2].classList.toggle("show-menu");
		e.target.parentElement.children[1].classList.toggle("rotate");
	};
});
