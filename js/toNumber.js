// === TO NUMBER ===

// любое строчное значение К ЧИСЛУ
let value = "Bla Bla Bla";

// 1й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// строчное число К ЧИСЛУ
value = "123";

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// пустая строка К ЧИСЛУ
value = "";

// 1й способ
toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных пустой строки ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`пустая строка ${value}, через унарный +: `, toNumber);
console.log(
  `тип данных пустой строки ${value}, через унарный +: `,
  typeof toNumber
);

// строка с пробелом (не пустая) К ЧИСЛУ
value = " ";

// 1й способ
toNumber = Number(value);
console.log(
  `строка с пробелом ${value}, через конструктор Number(): `,
  toNumber
);
console.log(
  `тип данных строки с пробелом ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(
  `тип данных строки с пробелом ${value}, через унарный +: `,
  typeof toNumber
);

// ------

// БУЛЕВОЕ (логическое) true к ЧИСЛУ
value = true;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

/// БУЛЕВОЕ (логическое) false к ЧИСЛУ
value = false;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// ------

// undefined к ЧИСЛУ
value = undefined;

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// ------

// null к ЧИСЛУ
value = null;

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number(): `,
  typeof toNumber
);

// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);
