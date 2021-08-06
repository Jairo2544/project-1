/*boton menu responsive*/
	document.querySelector(".boton-res").addEventListener("click", () => {
		document.querySelector(".nav-ul").classList.toggle("show")
	});

/*Recommend flechas*/
	var recommendNumber = 0

	/*Recommend-Flecha derecha*/
		document.querySelector(".right").addEventListener("click", () => {
			/*texto*/
				var recommend = ".recommend" + recommendNumber;
				var rcoloro = "r-color" + recommendNumber;
				var backo = "back" + recommendNumber;

				document.querySelector(recommend).classList.toggle("active");
				if (recommendNumber >= 2) {
					recommendNumber = 0
				}
				else {
					recommendNumber = recommendNumber + 1
				};
				var recommend = ".recommend" + recommendNumber;
				document.querySelector(recommend).classList.toggle("active");

			/*Background*/
				var backn = "back" + recommendNumber;
				document.querySelector(".container-recommend").classList.replace(backo, backn);

			/*color*/
				var rcolorn = "r-color" + recommendNumber;
				document.querySelector(".container-tittle").classList.replace(rcoloro, rcolorn);
		});

	/*Recommend-Flecha izquierda*/
		document.querySelector(".left").addEventListener("click", () => {
			/*texto*/
				var recommend = ".recommend" + recommendNumber;
				document.querySelector(recommend).classList.toggle("active");
				if (recommendNumber <= 0) {
					recommendNumber = 2
				}
				else {
					recommendNumber = recommendNumber - 1
				};
				var recommend = ".recommend" + recommendNumber;
				document.querySelector(recommend).classList.toggle("active");

			/*Background*/
				var back = "back" + recommendNumber;
				document.querySelector(".container-recommend").classList.remove("back0", "back1", "back2");
				document.querySelector(".container-recommend").classList.add(back);

			/*color*/
				var rcolor = "r-color" + recommendNumber;
				document.querySelector(".container-tittle").classList.remove("r-color0", "r-color1", "r-color2");
				document.querySelector(".container-tittle").classList.add(rcolor);
		});