let ogrenciler = ["Ali", "Veli", "Ayşe", "Fatma"];

let sonuc;

sonuc = ogrenciler.length; // 4
sonuc =ogrenciler.toString(); // Ali,Veli,Ayşe,Fatma
sonuc = ogrenciler.join(" - "); // Ali - Veli - Ayşe - Fatma

//eleman silme
// sonuc = ogrenciler.pop(); // Fatma
// sonuc = ogrenciler.shift(); // Ali

//eleman ekleme
// sonuc = ogrenciler.push("Mehmet");
// sonuc = ogrenciler.unshift("Mehmet");

//eleman arama
// sonuc = ogrenciler.indexOf("Veli"); // 1
// sonuc = ogrenciler.indexOf("Veli1"); // -1
// sonuc = ogrenciler.lastIndexOf("Veli"); // 1
// sonuc = ogrenciler.includes("Veli"); // true
// sonuc = ogrenciler.includes("Veli1"); // false

//silme ve ekleme
sonuc = ogrenciler.splice(0, 1, "Ali", "Canan");

console.log(sonuc);
console.log(ogrenciler);