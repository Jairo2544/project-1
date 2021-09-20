function meterHTML (id, code) {
	document.getElementById(id).insertAdjacentHTML("beforeend", code);
};

const requestURL = 'books-particulares/dbbook.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	const books = request.response.books;

	function primeros(number) {
		for (let i = 0; i<number; i++) {
			code = '<div class="container-section">	<img src="books-particulares/img/' + books[i].archive + '.jpg" alt="' + books[i].name +'">	<h3 class="book-tittle">' + books[i].name +'</h3>	<a href="books-particulares/html/' + books[i].archive + '.html"><i class="fas fa-info-circle"></i>Info</a>  </div>'
			meterHTML("section", code)
		}
	};

	function eliminar(number, array){
		for (let i = 0; i<number; i++) {
			array.shift()
		}
	};

	primeros(3);

};  
