"use strict";

/* Завдання 1. Типи даних */

// оголошення різних типів даних
const text = "Hello";
const numberValue = 42;
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol("id");
const bigIntValue = 123n;

// перевірка типів через typeof
console.log(text, typeof text);
console.log(numberValue, typeof numberValue);
console.log(booleanValue, typeof booleanValue);
console.log(nullValue, typeof nullValue);
console.log(undefinedValue, typeof undefinedValue);
console.log(symbolValue, typeof symbolValue);
console.log(bigIntValue, typeof bigIntValue);

// перетворення типів
console.log(String(123));
console.log(Number("123"));
console.log(Boolean(0));
console.log(Boolean("text"));

// шаблонний рядок
const studentName = "Олена";
const studentAge = 20;

console.log(`Студент: ${studentName}, вік: ${studentAge}`);

// порівняння == і ===
console.log(5 == "5", 5 === "5");
console.log(false == 0, false === 0);
console.log(null == undefined, null === undefined);


/* Завдання 2. Умови */

// функція визначення оцінки
function getGrade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    return "невалідний бал";
  }

  if (score <= 59) return "незадовільно";
  if (score <= 74) return "задовільно";
  if (score <= 89) return "добре";
  return "відмінно";
}

// функція визначення пори року
function getSeasonUA(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "зима";
    case 3:
    case 4:
    case 5:
      return "весна";
    case 6:
    case 7:
    case 8:
      return "літо";
    case 9:
    case 10:
    case 11:
      return "осінь";
    default:
      return "невалідний місяць";
  }
}

// перевірка повноліття через тернарний оператор
const status = studentAge >= 18 ? "повнолітній" : "неповнолітній";

// тестові виклики
console.log(getGrade(95));
console.log(getGrade(50));
console.log(getGrade(120));

console.log(getSeasonUA(4));
console.log(getSeasonUA(15));

console.log(status);


/* Завдання 3. Масиви */

// масив студентів
const students = [
  { name: "Олена", grade: 87, courses: ["JavaScript"] },
  { name: "Іван", grade: 95, courses: ["JavaScript"] },
  { name: "Марія", grade: 50, courses: ["JavaScript"] },
  { name: "Андрій", grade: 76, courses: ["JavaScript"] },
  { name: "Наталя", grade: 99, courses: ["JavaScript"] },
  { name: "Сергій", grade: 65, courses: ["JavaScript"] }
];

// зміна масиву (додавання/видалення)
students.push({ name: "Новий студент", grade: 80, courses: ["JavaScript"] });
students.pop();
students.splice(2, 1);
students.splice(1, 0, { name: "Вставлений студент", grade: 88, courses: ["JavaScript"] });

// пошук студента
console.log("Перший студент з оцінкою вище 90:", students.find(s => s.grade > 90));

// фільтрація по курсу
console.log("Студенти з JavaScript:");
console.log(students.filter(s => s.courses.includes("JavaScript")));

// середній бал
const averageGrade =
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;

console.log("Середній бал:", averageGrade);


/* Завдання 4. Функції */

// різні способи оголошення функцій
function rectangleArea(a, b) {
  return a * b;
}

const rectangleAreaExpression = function (a, b) {
  return a * b;
};

const rectangleAreaArrow = (a, b) => a * b;

// замикання (лічильник)
function createCounter() {
  let value = 0;

  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getValue());

// функція з дефолтними параметрами
function createUser(name, role = "student", isActive = true) {
  return { name, role, isActive };
}

// rest параметри
const sum = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

// деструктуризація параметрів
function printStudentInfo({ name, grade, courses }) {
  console.log(`${name} має оцінку ${grade}`);
  console.log(`Курси: ${courses.join(", ")}`);
}

console.log(rectangleArea(2, 3));
console.log(rectangleAreaExpression(2, 3));
console.log(rectangleAreaArrow(2, 3));

console.log(sum(1, 2, 3));
printStudentInfo(students[0]);


/* Завдання 5. Об’єкти */

// об’єкт студента з методами
const studentProfile = {
  firstName: "Олена",
  lastName: "Коваль",
  age: 20,
  university: "КПІ",
  grades: {
    math: 85,
    physics: 90
  },
  isActive: true,

  // повне ім’я
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // середній бал
  getAverageGrade() {
    const values = Object.values(this.grades);
    return values.reduce((a, b) => a + b, 0) / values.length;
  }
};

// доступ до властивостей
console.log(studentProfile.firstName);
console.log(studentProfile["age"]);

// динамічний ключ
const subjectKey = "math";
console.log(studentProfile.grades[subjectKey]);

// робота з об’єктом через Object methods
console.log(Object.keys(studentProfile));
console.log(Object.values(studentProfile));
console.log(Object.entries(studentProfile));

// копіювання об’єкта
const studentCopy = { ...studentProfile, age: 25 };

console.log(studentProfile.age, studentCopy.age);

// optional chaining
console.log(studentProfile.grades?.lab);
console.log(studentProfile.mentor?.name ?? "Не призначено");


/* Завдання 6. Ланцюжки методів */

// масив товарів
const products = [
  { name: "Ноутбук", price: 1000, inStock: true, quantity: 2, category: "electronics" },
  { name: "Телефон", price: 500, inStock: true, quantity: 3, category: "electronics" },
  { name: "Мишка", price: 50, inStock: false, quantity: 5, category: "electronics" },
  { name: "Книга", price: 200, inStock: true, quantity: 10, category: "books" },
  { name: "Монітор", price: 300, inStock: true, quantity: 2, category: "electronics" },
  { name: "Клавіатура", price: 150, inStock: true, quantity: 4, category: "electronics" },
  { name: "Рюкзак", price: 120, inStock: true, quantity: 1, category: "accessories" },
  { name: "Навушники", price: 80, inStock: false, quantity: 6, category: "electronics" }
];

// загальна вартість товарів в наявності
const totalValue = products
  .filter(p => p.inStock)
  .map(p => p.price * p.quantity)
  .reduce((acc, v) => acc + v, 0);

console.log("Загальна вартість:", totalValue);

// сортування та вибір назв
console.log(
  products
    .filter(p => p.category === "electronics")
    .sort((a, b) => a.price - b.price)
    .map(p => p.name)
);

// підрахунок по категоріях
console.log(
  products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {})
);


/* Завдання 7. Рядки */

// робота з рядками
const capitalize = str =>
  str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

const countWords = str =>
  str.trim().split(/\s+/).filter(Boolean).length;

const truncate = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

// перевірка email
function isValidEmail(email) {
  if (email.split("@").length !== 2) return false;

  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 2;
}

// тестування функцій
console.log(capitalize("javaScript"));
console.log(countWords(" JS це круто "));
console.log(truncate("Дуже довгий текст для прикладу", 10));

console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("invalid-email"));