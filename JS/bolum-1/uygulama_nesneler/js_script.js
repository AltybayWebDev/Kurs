let siparis_1 = {
  id: 101,
  musteri_id: 12,
  tarih: "31.12.2025",
  odeme_sekli: "Kredi Kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan mah",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "Iphone 16 Pro",
      urun_url: "https://www.apple.com/tr/iphone-16-pro/",
      fiyat: 75000,
    },
    {
      urun_id: 6,
      urun_adi: "Iphone 16 Pro Max",
      urun_url: "https://www.apple.com/tr/iphone-16-pro-max/",
      fiyat: 85000,
    },
  ],
};

let siparis_2 = {
  id: 102,
  musteri_id: 12,
  tarih: "31.11.2025",
  odeme_sekli: "Kredi Kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan mah",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "Iphone 16 Pro Max",
      urun_url: "https://www.apple.com/tr/iphone-16-pro-max/",
      fiyat: 85000,
    },
  ],
};

let siparis1_toplam = (siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat) * 1.2;
let siparis_2_toplam = siparis_2.urunler[0].fiyat * 1.2;

console.log(siparis1_toplam);
console.log(siparis_2_toplam);

let toplam_siparis = siparis1_toplam + siparis_2_toplam;
console.log("Toplam Sipariş: "+toplam_siparis);

let siparisler = [siparis_1, siparis_2];