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
			<li class="nav-ul-li"><a href="../../index.html#animes">ANIMES</a></li>
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
	var navMenu ='<div class="nav-container">	<a href="../../index.html"><img class="nav-img" src="../../img/logo.png" alt="logo"></a>	<div class="boton-res">		<i class="fas fa-bars"></i>	</div>	<ul class="nav-ul">		<li class="nav-ul-li"><a href="../../index.html#inicio">INICIO</a></li>		<li class="nav-ul-li"><a href="../../index.html#animes">ANIMES</a></li>		<li class="nav-ul-li"><a href="../../index.html#productos">PRODUCTOS</a></li>		<li class="nav-ul-li"><a href="../../index.html#redes">REDES</a></li>		<li class="nav-ul-li"><a href="../../foro.html">FORO</a></li>		</ul></div>';
	meterHTML("body", navMenu);

	/*Boton-res*/
		document.querySelector(".boton-res").addEventListener("click", () => {
			document.querySelector(".nav-ul").classList.toggle("show")
		});

/*Div container-particular-anime*/
	var div = '<div class="container-particular-anime" id="container"></div>';
	meterHTML("body", div);

/*Particular-anime*/
	const requestURL = '../dbanime.json';
	const request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		/*Array DB*/
			const animes = request.response.animes;
		/*Id*/
			const name = document.getElementById("name").textContent;
			for (i=0; i < animes.length; i++) {
				if (animes[i].name === name) {
					const id = animes[i].id;
					const archive = animes[i].archive;
					const sinopsis = animes[i].sinopsis;
					const argumento = animes[i].argumento;
					const ver = animes[i].ver;
					/*Redaccion del HTML*/
						
						/*titulo*/
							var code = '<h1><b>' + name + '</b></h1>';
							meterHTML("container", code);

						/*container-img*/
							var code = '<div class="container-img">	<img src="../img/' + archive + '.jpg" alt="' + archive + '">	<p>Portada de ' + name + '</p>	</div>';
							meterHTML("container", code);
						
						/*container-sinopsis*/
							var code = '<div class="container-sinopsis"><h2 class="tittle"><b>Sinopsis</b></h2>							<p class="paragraph">' + sinopsis + '</p>						</div>';
							meterHTML("container", code);
						
						/*container-argumento*/
							var code = '<div class="container-argumento">							<h2 class="tittle"><b>Resumen</b></h2>							<p class="paragraph">' + argumento + '</p>						</div>';
							meterHTML("container", code);						
						
						/*container-links*/
							var code = '<div class="container-links">							<h3 class="tittle"><b>Ver en:</b></h3>							<ul id= "links">	</ul>						</div>';
							meterHTML("container", code);
							
							/*meterlinks*/
								const netflix = ver.netflix;
								const crunchyroll = ver.crunchyroll;
								if (netflix != null) {
									var code = '<li>Netflix: <a href="' + netflix + '" target="_BLANK">Click aquí</a></li>';
									meterHTML("links", code)
								};
								if (crunchyroll != null) {
									var code = '<li>Crunchyroll: <a href="' + crunchyroll + '" target="_BLANK">Click aquí</a></li>';
									meterHTML("links", code)
								};

						/*footer*/
							var code ='<div class="container-footer"> <h3 class="derechos">©Todos los derechos reservados.</h3>   <h3 class="marca">Castillito SAC</h3>   </div>'
							meterHTML("body", code)
				}			
			};
	};