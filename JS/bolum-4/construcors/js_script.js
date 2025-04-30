// Constructor Function

function Product(title, description, price, stock) {
  this.title = title;
  this.description = description;
  this.price = price;
  this.stock = stock;
  this.display = function () {
    return `Ürün: ${this.title}, Açıklaması: ${this.description}, Fiyatı: ${
      this.price
    }, Stok: ${this.stock}TL, Durumu: ${this.is_active()}`;
  };
  this.is_active = function () {
    return this.stock > 0 ? "Satışta" : "Stok Yok";
  };
}

const product1 = new Product("Samsung S25", "Nice Phone", 50000, 100);
const product2 = new Product("Samsung S26", "Nice Phone", 60000, 0);
const product3 = new Product("Samsung S27", "Nice Phone", 70000, 50);

// console.log(`Ürün: ${product1.title}, Açıklaması: ${product1.description}, Fiyatı: ${product1.price}, Stok: ${product1.stock}`);
// console.log(`Ürün: ${product2.title}, Açıklaması: ${product2.description}, Fiyatı: ${product2.price}, Stok: ${product2.stock}`);
// console.log(`Ürün: ${product3.title}, Açıklaması: ${product3.description}, Fiyatı: ${product3.price}, Stok: ${product3.stock}`);

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());
