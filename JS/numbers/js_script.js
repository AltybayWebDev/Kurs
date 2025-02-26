sonuc = 10; //number
sonuc = "10"; //string
sonuc = Number("10"); //number
sonuc = parseInt("10.7"); //number
sonuc = parseFloat("10.7"); //number
sonuc = parseInt("105a"); //number
sonuc = parseInt("a105"); //NaN

sonuc = isNaN("10"); //is not a number? false
sonuc = Number.isInteger(10.5); //false

let sayi = 10.12355;

sonuc = sayi.toPrecision(5); //10.124
sonuc = sayi.toFixed(2); //10.12

sonuc = Math.round(2.4); //yuvarlama
sonuc = Math.round(2.6); //yuvarlama
sonuc = Math.ceil(2.1); //yukarı yuvarlama
sonuc = Math.floor(2.9); //aşağı yuvarlama
sonuc = Math.sqrt(25); //karekök
sonuc = Math.pow(2, 3); //üs alma
sonuc = Math.min(1, 2, 10, 56, 3, 5, 6); //min
sonuc = Math.max(1, 2, 10, 56, 3, 5, 6); //max

sonuc = Math.random(); //0-1 arası rastgele sayı
sonuc = Math.random() * 100; //0-100 arası rastgele sayı
sonuc = Math.ceil(Math.random() * 100 + 50); //50-150 arası rastgele sayı

console.log(typeof sonuc);
console.log(sonuc);
