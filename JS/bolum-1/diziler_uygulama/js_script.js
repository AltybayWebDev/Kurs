let manav = ["Kiraz", "Karpuz", "Kavun", "Erik"];
let sonuc;

//dizi kaç elemandır?
// sonuc = manav.length;

//dizinin ilk ve son elemanı nedir?
// sonuc = manav[0] + " " + manav[manav.length - 1];

//kavun dizinin bir elemanıdır?
// sonuc = manav.indexOf("Kavun");
// sonuc = manav.includes("Kavun");

//dizinin sonuna çilek ekleyiniz
// manav.push("Çilek");
manav[manav.length] = "Çilek";

//dizinin son iki elemanını siliniz
// manav.pop();
// manav.pop();
// manav.splice(manav.length - 2, 2);

// console.log(manav);

let ogrenci1 = ["Yiğit", "Bilgi", 2010, [60, 90, 80]];
let ogrenci2 = ["Ada", "Bilgi", 2012, [50, 80, 80]];
let ogrenci3 = ["Çınar", "Turan", 2017, [60, 50, 80]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

//yaşlar
console.log((2025 - ogrenciler[0][2]));
console.log((2025 - ogrenciler[1][2]));
console.log((2025 - ogrenciler[2][2]));

//notlar
console.log(Math.round((ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3));
console.log(Math.round((ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3));
console.log(Math.round((ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3));

console.log(sonuc);
