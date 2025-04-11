//Objects

const person = {
  name: "Altybay",
  surname: "Gurbanov",
  birthYear: 2007,

  age_calculator: function () {
    return `Person Age: ${2025 - this.birthYear}`;
  },
};

// Accessing object properties
console.log(person.name);
console.log(person.surname);
console.log(person.birthYear);
console.log(person.age_calculator());

const rectangle = {
  title: "Rectangle",
  width: 20,
  height: 10,

  area: function () {
    return `${this.title} Area: ${this.width * this.height}`;
  },
  perimeter: function () {
    return `${this.title} Perimeter: ${2 * (this.width + this.height)}`;
  },
};

console.log(rectangle.title);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area());
console.log(rectangle.perimeter());
