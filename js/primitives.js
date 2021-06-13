// task-1
// Объяви две переменные хранящие имя пользователя и вариант приветствия.
// Дай имена (идентификаторы) переменных, согласно правил именования перемнных.
// Присвой переменным (сразу при объявлении) соответствующие им значения, то есть, имя и приветствие.
// Не забывай про строчный тип данных и используй кавычки.
// Используя шаблонную строку и интерполяцию, выведи в консоль приветствие пользователя через подстановку значений твоих переменных.
// Например: Валик, привет!
// Присвой своим переменным новые значения и снова выведи в консоль получившийся результат.

const userName = 'Goga';
const greeting = 'wats up!!??';
console.log(`${userName}, ${greeting}`);

// -----------------------------------
// task-2
// Cоздай 6 переменных с именами, согласно правил именования переменных, 
// присвой им значения всех типов примитивов:
// string
// number
// boolean (для обоих значений по отдельной переменной)
// null
// undefined
// Выведи по две консоли для каждой переменной, указав комментарий в команде
// перед именем переменной, например:
// const fruit = 'apple';
// console.log("fruit: ", fruit);
// console.log("type of data: ", typeof fruit);

const string = 'text';
console.log('string:',string);
console.log('type of data:', typeof string);

const number = 1111;
console.log('number:',number);
console.log('type of data:', typeof number);

const booleanTrue = true;
console.log('boolean:', booleanTrue);
console.log('type of data:', typeof booleanTrue);

const booleanFalse = false;
console.log('boolean:', booleanFalse);
console.log('type of data:', typeof booleanFalse);

const zero = null;
console.log('null:', zero);
console.log('type of data', typeof zero);

let undef;
console.log('dntknow', undef);
console.log('type of data', typeof undef);