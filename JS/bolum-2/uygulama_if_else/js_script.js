let sayi = 62;
if (sayi > 50 && sayi < 100) {
  console.log("Sayı 50 ile 100 arasındadır.");
} else {
  console.log("Sayı 50 ile 100 arasında değildir.");
}

if (sayi >= 0 && sayi % 2 == 0) {
  console.log("Sayı pozitif ve çifttir.");
} else {
  console.log("Sayı pozitif ve çift değildir.");
}

let x, y, z;
x = 10;
y = 20;
z = 30;

if (x > y && x > z) {
  console.log("x en büyük sayıdır.");
} else if (y > x && y > z) {
  console.log("y en büyük sayıdır.");
} else if (z > x && z > y) {
  console.log("z en büyük sayıdır.");
} else {
  console.log("Hatalı giriş.");
}

let vize1 = 50;
let vize2 = 60;
let final = 70;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log(ortalama);

if (ortalama >= 50) {
  console.log("Geçti.");
} else {
  console.log("Kaldı.");
}

if (ortalama >= 50 && final >= 50) {
  console.log("Geçti.");
} else {
  console.log("Kaldı.");
}

if (ortalama >= 50 || final >= 70) {
  console.log("Geçti.");
} else {
  console.log("Kaldı.");
}
