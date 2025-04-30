var ad = "Sadık";
var soyad = "Turan";
var yas = 40;
var sehir = "Kocaeli";

var mesaj =
  "Benim adım " + ad + " " + soyad + " yaşım " + yas + " ve şehrim " + sehir;

//template string
mesaj = `Benim adım ${ad} ${soyad} yaşım ${yas} ve şehrim ${sehir}`;

console.log(mesaj);
