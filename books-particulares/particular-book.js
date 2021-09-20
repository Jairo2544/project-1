/*Nav-menu generator
--><script type="text/javascript" src="./javaScript/nav-menu-generator.js"></script>
-->Codigo Fuente
	<div class="nav-container">
		<a href="../../index.html"><img class="nav-img" src="../../img/logo.png" alt="logo"></a>
		<div class="boton-res">
			<i class="fas fa-bars"></i>
		</div>
		<ul class="nav-ul">
			<li class="nav-ul-li"><a href="../../index.html#inicio">INICIO</a></li>
			<li class="nav-ul-li"><a href="../../index.html#books">bookS</a></li>
			<li class="nav-ul-li"><a href="../../index.html#productos">PRODUCTOS</a></li>
			<li class="nav-ul-li"><a href="../../index.html#redes">REDES</a></li>	
			<li class="nav-ul-li"><a href="../../foro.html">FORO</a></li>	
		</ul>
	</div>
*/
/*Meter HTML*/
	function meterHTML (id, HTML) {
		document.getElementById(id).insertAdjacentHTML("beforeend", HTML);
	}

/*Head*/
	var head = '<meta charset="utf-8">	<link rel="stylesheet" type="text/css" href="../../normalize.css">	<link rel="stylesheet" type="text/css" href="../../estilo.css">	<link rel="icon" href="../../img/logo.ico">';
	meterHTML("head", head);

/*Nav-menu*/
	var navMenu ='<div class="nav-container">	<a href="../../index.html"><img class="nav-img" src="../../img/logo.png" alt="logo"></a>	<div class="boton-res">		<i class="fas fa-bars"></i>	</div>	<ul class="nav-ul">		<li class="nav-ul-li"><a href="../../index.html#inicio">INICIO</a></li>		<li class="nav-ul-li"><a href="../../index.html#books">BOOKS</a></li>		<li class="nav-ul-li"><a href="../../index.html#productos">PRODUCTOS</a></li>		<li class="nav-ul-li"><a href="../../index.html#redes">REDES</a></li>		<li class="nav-ul-li"><a href="../../foro.html">FORO</a></li>		</ul></div>';
	meterHTML("body", navMenu);

	/*Boton-res*/
		document.querySelector(".boton-res").addEventListener("click", () => {
			document.querySelector(".nav-ul").classList.toggle("show")
		});

/*Div container-particular-book*/
	var div = '<div class="container-particular-book" id="container"></div>';
	meterHTML("body", div);

/*Particular-book*/
	const requestURL = '../dbbook.json';
	const request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		/*Array DB*/
			const books = request.response.books;
		/*Id*/
			const name = document.getElementById("name").textContent;
			for (i=0; i < books.length; i++) {
				if (books[i].name === name) {
					const id = books[i].id;
					const archive = books[i].archive;
					const sinopsis = books[i].sinopsis;
					const video = books[i].video;
					const comprar = books[i].comprar;
					/*Redaccion del HTML*/
						
						/*titulo*/
							var code = '<h1><b>' + name + '</b></h1>';
							meterHTML("container", code);

						/*container-img*/
							var code = '<div class="container-img">	<img src="../img/' + archive + '.jpg" alt="' + archive + '">	<p>' + name + '</p>	</div>';
							meterHTML("container", code);
						
						/*container-sinopsis*/
							var code = '<div class="container-sinopsis"><h2 class="tittle"><b>Synopsis</b></h2>							<p class="paragraph">' + sinopsis + '</p>						</div>';
							meterHTML("container", code);
						
						/*container-argumento*/
							var code = '<div class="container-argumento">							<h2 class="tittle"><b>Review</b></h2>							<video src="../video/' + video + '" controls class="video">+ + </video>						</div>';
							meterHTML("container", code);						
						
						/*container-links*/
							var code = '<div class="container-links">							<h3 class="tittle"><a href="' + comprar +'"><b>Buy</b></a></h3>';
							meterHTML("container", code);

						/*footer*/
							var code ='<div class="container-footer"> <h3 class="derechos">©Todos los derechos reservados.</h3>   <h3 class="marca">Castillito SAC</h3>   </div>'
							meterHTML("body", code)
				}			
			};
	};