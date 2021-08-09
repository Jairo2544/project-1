/*Nav-menu generator
--><script type="text/javascript" src="./javaScript/nav-menu-generator.js"></script>
-->Codigo Fuente
	<div class="nav-container">
	    <a href="index.html"><img class="nav-img" src="img/logo.png" alt="logo"></a>
    	<div class="boton-res">
	    	<i class="fas fa-bars"></i>
	    </div>
    	<ul class="nav-ul">
			<li class="nav-ul-li"><a href="#inicio">INICIO</a></li>
			<li class="nav-ul-li"><a href="#animes">ANIMES</a></li>
			<li class="nav-ul-li"><a href="#productos">PRODUCTOS</a></li>
			<li class="nav-ul-li"><a href="#redes">REDES</a></li>	
			<li class="nav-ul-li"><a href="foro.html">FORO</a></li>	
		</ul>
	</div>
*/
    var navMenu ='<div class="nav-container">    <a href="index.html"><img class="nav-img" src="img/logo.png" alt="logo"></a>    <div class="boton-res">        <i class="fas fa-bars"></i>    </div>    <ul class="nav-ul">        <li class="nav-ul-li"><a href="index.html#inicio">INICIO</a></li>        <li class="nav-ul-li"><a href="index.html#animes">ANIMES</a></li>        <li class="nav-ul-li"><a href="index.html#productos">PRODUCTOS</a></li>        <li class="nav-ul-li"><a href="index.html#redes">REDES</a></li>	        <li class="nav-ul-li"><a href="foro.html">FORO</a></li>	    </ul>   </div>'

    document.write(navMenu)

/*Boton-res*/
    document.querySelector(".boton-res").addEventListener("click", () => {
        document.querySelector(".nav-ul").classList.toggle("show")
    });