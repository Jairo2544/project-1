document.querySelector(".boton-res").addEventListener("click", () => {
	document.querySelector(".nav-ul").classList.toggle("show")
});

var recommendNumber = 0

document.querySelector(".right").addEventListener("click", () => {
	var recommend = ".recommend" + recommendNumber;
	document.querySelector(recommend).classList.toggle("active");
	console.log(recommend);
	if (recommendNumber >= 2) {
		recommendNumber = 0
	}
	else {
		recommendNumber = recommendNumber + 1
	};
	var recommend = ".recommend" + recommendNumber;
	console.log(recommend);
	document.querySelector(recommend).classList.toggle("active");
});
