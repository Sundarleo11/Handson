function Person(name, age) {
  this.name = name;
  this.age = age;

  /* this.Adult = function () {
    return this.age >= 18;
  };*/
}
Person.prototype.Adult = function () {
  return this.age >= 18;
};

Person.prototype.city = "Madurai";

let p = new Person("Kumar", 27);
let p1 = new Person("Akila", 12);

console.log(p.Adult());
console.log(p1.Adult());
console.log(p.Adult == p1.Adult);

console.log(p);
console.log(p1);
