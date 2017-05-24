var career = {
     salam :'Selamat datang di Career games Masukan Nama Anda',
    jobs : ['guru','programmer','dokter'],
    congratQ : {
      teachQ : 'Mengajar merupakan hal baik',
      progQ : 'Menjadi developer adalah pilihanmu',
      doctorQ :'Menyembuhkan orang adalah passionmu',
    },

}

var nama = '';
var karir = '';
var jawaban;

if (nama == ''){
  nama = prompt(career.salam);
}
if(karir == ''){
  karir = prompt("Pilih karir anda untuk memulai kuis ini \n1.guru\n2.programmer\n3.dokter ");

  if(karir == career.jobs[0]) {
    guru()
  }else if (karir == career.jobs[1]){
    programmer()
  }else if (karir == career.jobs[2]){
    dokter();
  }
}

function dokter(){
    var organManusia = [
      ["Penglihatan", 6],
      ["Pendengaran", 3],
      ["Pencium", 5],
      ["Pengecap", 5],
      ["Peraba", 5]
    ];
    var indexD = Math.floor((Math.random() *5) + 0);
    var flag =0;
    if (jawaban == ''|| jawaban != '') {
    jawaban = prompt("Ada berapa bagian di indera "
    +organManusia[indexD][0]+" ?");

      if(jawaban == organManusia[indexD][1]){
        console.log("Selamat"+nama+"Anda berhasil menjadi dokter ");
        console.log(career.congratQ.doctorQ);
      } else {
          console.log("Maaf"+nama+"Anda tidak berhasil menjadi dokter");
      }
  }
}


function guru() {
  var pertanyaan;
  var hasil = 0 ;
  var tampung =[];
  var print;
  for (i=1; i< 4 ; i++){
        pertanyaan = Math.floor((Math.random() * 10) + 1);
        tampung.push(pertanyaan);
        //console.log(pertanyaan);
        hasil += pertanyaan;
    }
   print = tampung.join(" + ");
   jawaban = prompt("Jawab pertanyan berikut: " + print);
    if(jawaban == hasil){
      console.log("Selamat"+nama+"Anda berhasil menjadi Guru ");
      console.log(career.congratQ.teachQ);
   } else {
     console.log("Maaf"+nama+"mungkin profesi guru tidak cocok untuk anda");
   }
}

function programmer(){
  var acakUlang = Math.floor((Math.random() * 10) + 1);
  var acak;
  var ganjil = 0;
  var genap = 0;
  var tampung =[];
  var print;

  for (i=1; i< acakUlang ; i++){
        acak = Math.floor((Math.random() * 10) + 1);
        tampung.push(acak);
        if (acak%2 == 0) {
          genap++
        }
        else {
          ganjil++
        }
    console.log ("angka = " +acak);
 }
  print = tampung.join(" ");
  jawaban = prompt("Jawab pertanyan berikut: \n" + print +"\nBerapa hasil dari Angka Genap dikalikan Ganjil dari deret diatas");
  if((genap*ganjil)==jawaban){
    console.log("Selamat " +nama+" anda dapat menjadi programmer masa depan");
    console.log(career.progQ);
  }


}
