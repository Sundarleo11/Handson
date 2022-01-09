console.log("hi");

function Person(name, age) {
  this.name = name;
  this.age = age;
  return 30;
}

let p = new Person("Harry", 20);
console.log(p);
console.log("p", JSON.stringify(p));
//console.log(name);
//console.log(p);
