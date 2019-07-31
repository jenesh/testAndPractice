// ES5
function Animal1(name) {
  this.name = name;
  this.speak = function() {
    console.log(this.name + " says WOOF!");
  };
}

Animal1.prototype.eat = function() {
  console.log(this.name + " is now eating");
};
let dog = new Animal1("Ringo");
// dog.speak();
// dog.eat();

class Animal2 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " Brrrrat");
  }
}
Animal2.prototype.eat = function() {
  console.log(this.name + " says nom nom nom");
};
let cat = new Animal2("Tony");
// cat.speak();
// cat.eat();

// STATIC METHOD
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(0, 3);
const p2 = new Point(4, 0);

// console.log(Point.distance(p1, p2));

class Dog extends Animal2 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  get bark() {
    return this.speak();
  }
  speak() {
    console.log(this.name + " says watch your self");
  }
  fetch() {
    console.log("The " + this.breed + " is playing fetch");
  }
}
let ruff = new Dog("Max", "Dalmation");

// ruff.speak();
// ruff.fetch();
// ruff.bark;

const obj = {
  speak() {
    console.log("Meooww!");
  },
  growl() {
    console.log("Rawwwr!");
  }
};
class Cat {
  constructor(name) {
    this.name = name;
  }
}
Object.setPrototypeOf(Cat.prototype, obj);
let kate = new Cat("Kate");
// kate.speak();
// kate.growl();

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);
// console.log(mapped);
// console.log(mapped instanceof MyArray);
// console.log(mapped instanceof Array);
function strict() {
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi! I'm a strict mode function! " + nested();
}
function notStrict() {
  return "I'm not strict.";
}
// console.log(strict());
// console.log(notStrict());
// ("use strict");
let obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writeable: true });
obj1.x = 40;
// console.log(obj1.x);

class A {
  constructor(a) {
    this.a = a;
  }
  static logg() {
    return "Logged";
  }
}

class B extends A {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  static logMe1() {
    return super.logg() + " using B";
  }
}

class C extends B {
  constructor(a, b, c) {
    super(a, a);
    this.c = c;
  }
  get word() {
    return this.a + this.b + this.c;
  }
  set word(word) {
    this.stringWord = word;
  }
  static logMe2() {
    return super.logMe1() + " using C";
  }
}
let aa = new A("a");
let bb = new B("a", "b");
let cc = new C("a", "b", "c");
bb.logMe1;
// console.log(aa, bb, cc);
// console.log(cc.word);

// console.log(Object.getPrototypeOf(B.prototype) === A.prototype);
class GetSet {
  constructor(name) {
    this._myname = name;
  }
  get myname() {
    return this._myname + " is cool";
  }
  set myname(x) {
    this._myname = x;
  }
}

let newGetSet = new GetSet("Testing");

console.log(newGetSet._myname);
console.log(newGetSet.myname);
