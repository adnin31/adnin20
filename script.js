var judul = document.getElementById("fill-me");
var tulis =judul.innerHTML
tulis = 'Halo!';

var paragraph = document.getElementsByClassName("change-all-of-me");

for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = 'Halo Juga!'
}

var subJudul = document.getElementsByTagName('h2');
subJudul[0].innerHTML = 'Apa Kabar!'
