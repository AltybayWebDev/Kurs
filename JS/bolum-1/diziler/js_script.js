let urunler = ["Iphone 15", "Samsung S20", "Huawei P40", "Xiaomi Mi 10"];
let fiyatlar = [15000, 12000, 9000, 8000];
let renkler = ["Siyah", "Beyaz", "Mavi", "Gri"];

let sonuc;

sonuc = urunler[0] + " " + fiyatlar[0] + " " + renkler[0];
sonuc = urunler[1] + " " + fiyatlar[1] + " " + renkler[1];
sonuc = urunler[2] + " " + fiyatlar[2] + " " + renkler[2];
sonuc = urunler[3] + " " + fiyatlar[3] + " " + renkler[3];

let urun1 = ["Iphone 15", 15000, ["Siyah", "Beyaz", "Mavi", "Gri"]];
let urun2 = ["Samsung S20", 12000, "Beyaz"];
let urun3 = ["Huawei P40", 9000, "Mavi"];
let urun4 = ["Xiaomi Mi 10", 8000, "Gri"];

urun1[0] = "Iphone 15";

sonuc = urun1[0] + " " + urun1[1] + " " + urun1[2][0];

console.log(sonuc);