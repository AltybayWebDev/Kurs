//Operatörler

let sonuc;
let a = 20,
  b = 10,
  c = 10;

// 1 Aritmetik Operatörler
sonuc = a + b; // Toplama
sonuc = a - b; // Çıkarma
sonuc = a * b; // Çarpma
sonuc = a / b; // Bölme
sonuc = a % b; // Mod alma
// sonuc = a++; // sonuc = a + 1
// sonuc = ++a; // sonuc = a + 1
// sonuc = a--; // sonuc = a - 1
// sonuc = --a; // sonuc = a - 1

// Atama Operatörleri
sonuc = a;
sonuc += a + b; // sonuc = sonuc + (a+b)
sonuc += a; // sonuc = sonuc + a
sonuc -= a; // sonuc = sonuc - a
sonuc *= a; // sonuc = sonuc * a
sonuc /= a; // sonuc = sonuc / a
sonuc %= a; // sonuc = sonuc % a

// Karşılaştırma Operatörleri
sonuc = a == b; // Eşit mi?
sonuc = a == c; // True, False
sonuc = a != b; // Eşit değil mi?
sonuc = 2 === "2"; // Tam eşit mi?
sonuc = a > b; // Büyük mü?
sonuc = a >= b; // Büyük veya eşit mi?
sonuc = a < b; // Küçük mü?
sonuc = a <= b; // Küçük veya eşit mi?

// Mantıksal Operatörler

console.log(sonuc);