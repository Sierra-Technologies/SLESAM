const panels = document.querySelectorAll(".image-panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClass();
		panel.classList.add("active");
	});
});

const removeActiveClass = () => {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
};
$(".photo-slider").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	items: 3,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: true,
	responsive: {
		600: {
			items: 1,
		},
	},
});
