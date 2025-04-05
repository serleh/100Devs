//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let user = {};
user.name = "John";
user.surname = "Smitch";
user.name = "Pete";
delete user.name;
console.log(user);

//2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "wake up";
// alert(isEmpty(schedule));

// 3.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(salaries);

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// // }

// let calculator = new Calculator();
// calculator.read();

// alert("SUM=" + calculator.sum());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const person1 = new Person("Saleh", 25);
person1.greet();

// INHERITANCE
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  work() {
    console.log(`${this.name} works as a ${this.job}.`);
  }
}
const emp1 = new Employee("Saleh", 25, "Software Enginner");

//POLYMORPHISM

class Animal {
  speak() {
    console.log("Animal Makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dogs Barks");
  }
}

const dog = new Dog();
dog.speak();

class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Saleh", 1000);
account.deposit(200);
console.log(account.getBalance());
