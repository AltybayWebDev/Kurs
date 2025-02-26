let url = "https://sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu.";

let sonuc;

//url değerinin uzunluğunu bulmak
sonuc = url.length;

//kurs adının kaç kelime olduğunu bulmak
sonuc = kursAdi.split(" ");

//url https ile başlıyor mu? bulmak
sonuc = url.startsWith("https");

//kurs adında Eğitimi kelimesi geçiyor mu? bulmak
sonuc = kursAdi.includes("Eğitimi");

//url ve kurs adı değişkenlerini kullanarak aşağıdaki bilgiyi oluşturma

//https://sadikturan.com/komple-web-gelistirme-kursu
sonuc =
  url +
  kursAdi.toLowerCase().replaceAll(" ", "-").replace("ş", "s").replace(".", "");

console.log(sonuc);
