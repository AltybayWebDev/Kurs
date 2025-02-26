//değişkenler

var a = "5500";
var b = "5000";
var c = "6000";
var d = "7000";
var kdv = 0.18;

console.log(a * kdv); //ürün a

a = 6000;

console.log(a * kdv); //ürün a
console.log(b * kdv); //ürün b
console.log(c * kdv); //ürün c
console.log(d * kdv); //ürün d

//Değişken Tanımlama Kuralları

//Türkçe karakter kullanmayın

//var ürünFiyatı = 10000; //hatalı
var urunFiyati = 10000; //doğru

//Arada boşluk bırakmayın

//var ürün Fiyatı = 10000; //hatalı
var urunFiyati = 10000; //doğru
var urun_Fiyati = 10000; //doğru

//Sayı ile başlamayın

//var 1urun = "Samsung";
var urun1 = "Samsung"; //doğru
var urun2 = "Apple"; //doğru
