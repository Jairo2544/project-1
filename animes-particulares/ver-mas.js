/*var animes = [
	{
		id: 1,
		archive: "KoeNoKatachi",
		name: "Koe No Katachi",
	},

	{
		id: 2,
		archive: "Kakegurui",
		name: "Kakegurui",
	},

	{
		id: 3,
		archive: "BunnyGirlSenpai",
		name: "Bunny girl Senpai",
	},

	{
		id: 4,
		archive: "PokemonXY",
		name: "Pokemon XY",
	},

	{
		id: 5,
		archive: "ReLife",
		name: "ReLife",
	},

	{
		id: 6,
		archive: "AngelBeast",
		name: "Angel Beast",
	},

	{
		id: 7,
		archive: "YourLieInApril",
		name: "Your lie in April",
	},

	{
		id: 8,
		archive: "Tsugonomo",
		name: "Tsugonomo",
	},

	{
		id: 9,
		archive: "ThePromisedNeverland",
		name: "The Pormised Neverland",
	},

	{
		id: 10,
		archive: "KarakaiJouzuNoTakagiSan",
		name: "Karakai Jouzu No Takagi-San",
	},

	{
		id: 11,
		archive: "DeathNote",
		name: "Death Note",
	},

	{
		id: 12,
		archive: "KimetsuNoYaiba",
		name: "Kimetsu No Yaiba",
	},

	{
		id: 13,
		archive: "ShingekiNoKyojin",
		name: "Shingeki No Kyojin",
	},

	{
		id: 14,
		archive: "Himouto!UmaruChan",
		name: "Himouto! Umaru-chan",
	},

	{
		id: 15,
		archive: "SwordArtOnline",
		name: "Sword Art Online",
	},

	{
		id: 16,
		archive: "TokyoGhoul",
		name: "Tokyo Ghoul",
	},

	{
		id: 17,
		archive: "Toradora!",
		name: "Toradora!",
	},

	{
		id: 18,
		archive: "NeonGenesisEvangelion",
		name: "Neon Genesis Evangelion",
	},

	{
		id: 19,
		archive: "SailorMoom",
		name: "Sailor Moom",
	},

	{
		id: 20,
		archive: "Clannad",
		name: "Clannad",
	},
 
];*/

function meterHTML (id, code) {
	document.getElementById(id).insertAdjacentHTML("beforeend", code);
};

const requestURL = 'animes-particulares/dbanime.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	const animes = request.response.animes;

	function primeros(number) {
		for (let i = 0; i<number; i++) {
			code = '<div class="container-section">	<img src="animes-particulares/img/' + animes[i].archive + '.jpg" alt="' + animes[i].name +'">	<h3 class="anime-tittle">' + animes[i].name +'</h3>	<a href="animes-particulares/html/' + animes[i].archive + '.html"><i class="fas fa-info-circle"></i>Info</a>  </div>'
			meterHTML("section", code)
		}
	};

	function eliminar(number, array){
		for (let i = 0; i<number; i++) {
			array.shift()
		}
	};

	primeros(6);

	document.getElementById("more").addEventListener("click", () => {
		eliminar(6, animes);
		if (animes.length >= 6) {
			primeros(6);
		};
		if (animes.length < 6) {
			primeros(animes.length);
			document.querySelector(".moreanime").classList.add("hidden")
		}
	});
};  
