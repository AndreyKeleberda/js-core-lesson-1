console.log(`variables`);

console.log(student); // undefined

var student = "Sandra";
console.log(student);

var count; // объявление переменной без инициализации
console.log(count); // undefined

count = 1;
console.log(count); // 1
count = 2;
console.log(count); // 2

// console.log(number); // Uncaught ReferenceError: Cannot access 'number' before initialization
let number = 30;
console.log(number);

let age; // объявление переменной без инициализации
console.log(age); // undefined

age = 18;
console.log(18);

age = 22;
console.log(age);

// console.log(userName); // Uncaught ReferenceError: Cannot access 'userName' before initialization
// const user; // Uncaught SyntaxError: Missing initializer in const declaration

const userName = "Vova";
console.log(userName);

// userName = ""; // Uncaught TypeError: Assignment to constant variable.
