var animes = [
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
 
];

function primeros(number) {
    for (let i = 0; i<number; i++) {
        document.getElementById("section").insertAdjacentHTML("beforeend", '<div class="container-section">    <img src="animes-particulares/' + animes[i].archive + '/' + animes[i].archive + '.jpg" alt="' + animes[i].name +'">    <h3 class="anime-tittle">' + animes[i].name +'</h3>    <a href="/animes-particulares/' + animes[i].archive + '/' + animes[i].archive + '.html"><i class="fas fa-info-circle"></i>Info</a>  </div>');
    }
};

function eliminar(number, array){
    for (let i = 0; i<number; i++) {
        array.shift()
    }
};

for (let i=0 ; i<6 ; i++) {
   document.getElementById("section").insertAdjacentHTML("beforeend", '<div class="container-section">    <img src="animes-particulares/' + animes[i].archive + '/' + animes[i].archive + '.jpg" alt="' + animes[i].name +'">    <h3 class="anime-tittle">' + animes[i].name +'</h3>    <a href="/animes-particulares/' + animes[i].archive + '/' + animes[i].archive + '.html"><i class="fas fa-info-circle"></i>Info</a>  </div>');
};

document.getElementById("more").addEventListener("click", () => {
    eliminar(6, animes);
    if (animes.length >= 6) {
        primeros(6);
    }
    if (animes.length < 6) {
        primeros(animes.length);
        document.querySelector(".moreanime").classList.add("hidden")
    }
});



/*var animes = [
    anime1 = {
        id: 1,
        archive: "KoeNoKatachi",
        name: "Koe No Katachi",
    },

    anime2 = {
        id: 2,
        archive: "Kakegurui",
        name: "Kakegurui",
    },

    anime3 = {
        id: 3,
        archive: "BunnyGirlSenpai",
        name: "Bunny girl Senpai",
    },

    anime4 = {
        id: 4,
        archive: "PokemonXY",
        name: "Pokemon XY",
    },

    anime5 = {
        id: 5,
        archive: "Relife",
        name: "Relife",
    },

    anime6 = {
        id: 6,
        archive: "AngelBeast",
        name: "Angel Beast",
    },

    anime7 = {
        id: 7,
        archive: "YourLieInApril",
        name: "Your lie in April",
    },

    anime8 = {
        id: 8,
        archive: "Tsugonomo",
        name: "Tsugonomo",
    },

    anime9 = {
        id: 9,
        archive: "ThePromisedNeverland",
        name: "The Pormised Neverland",
    },

    anime10 = {
        id: 10,
        archive: "KarakaiJouzuNoTakagiSan",
        name: "Karakai Jouzu No Takagi-San",
    },

    anime11 = {
        id: 11,
        archive: "DeathNote",
        name: "Death Note",
    },

    anime12 = {
        id: 12,
        archive: "KimetsuNoYaiba",
        name: "Kimetsu No Yaiba",
    },

    anime13 = {
        id: 13,
        archive: "ShingekiNoKyojin",
        name: "Shingeki No Kyojin",
    },

    anime14 = {
        id: 14,
        archive: "Himouto!UmaruChan",
        name: "Himouto! Umaru-chan",
    },

    anime15 = {
        id: 15,
        archive: "SwordArtOnline",
        name: "Sword Art Online",
    },

    anime16 = {
        id: 16,
        archive: "TokyoGhoul",
        name: "Tokyo Ghoul",
    },

    anime17 = {
        id: 17,
        archive: "Toradora!",
        name: "Toradora!",
    },

    anime18 = {
        id: 18,
        archive: "NeonGenesisEvangelion",
        name: "Neon Genesis Evangelion",
    },

    anime19 = {
        id: 19,
        archive: "SailorMoom",
        name: "Sailor Moom",
    },

    anime20 = {
        id: 20,
        archive: "Clannad",
        name: "Clannad",
    },
 
];*/