checkCondition(1, 2, 3);
// обьявление FUNCTION DECLARATION
function checkCondition(min, max, condition) {
  //   if (condition <= max && condition >= min) {
  //     console.log("условие соблюдено");
  //   } else {
  //     console.log("условие не выполнено");
  //   }
  if (condition <= max && condition >= min) console.log("условие соблюдено");
  if (condition > max && condition < min) console.log("условие не выполнено");
}

// checkCondition_1(3, 2, 1); // нельзя вызвать до обьявления
// обьявление FUNCTION EXPRESSION
const checkCondition_1 = function (min, max, condition) {
  //   if (condition <= max && condition >= min) {
  //     return "условие соблюдено";
  //   } else {
  //     return "условие не выполнено";
  //   }
  if (condition <= max && condition >= min) {
    return console.log("условие соблюдено");
  } else {
    return console.log("условие не выполнено");
  }
};
checkCondition_1(10, 15, 12);

// пример структуры тернарного оператора
// (условие) ? {1тело} : {2тело}
const checkCondition_2 = (min, max, condition) => {
  // if (condition <= max && condition >= min) {
  //     console.log('условие соблюдено');
  // } else {console.log('условие не выполнено'); }
  condition <= max && condition >= min
    ? console.log("условие соблюдено")
    : console.log("условие не выполнено");
};

checkCondition_2(10, 20, 15);

const users = [
  {
    name: "Lena",
    age: 18,
    gender: "female",
  },
  {
    name: "Vasya",
    age: 23,
    gender: "male",
  },
  {
    name: "Petya",
    age: 99,
    gender: "male",
  },
  {
    name: "Marina",
    age: 33,
    gender: "female",
  },
];

function filterAgeUser(arr, age) {
  return arr.filter((el) => {
    return el.age >= age;
  });
}
console.log(filterAgeUser(users, 18));

function filterGenderUser(arr, gender) {
  return arr.filter((el) => {
    return el.gender === gender;
  });
}
console.log(filterGenderUser(users, "male"));
console.log(
  filterGenderUser(users, "female").map((el) => {
    return el.name;
  })
);

function getAge(arr) {
  return arr.reduce((acc, el) => {
    console.log(acc, el);
    acc += el.age / arr.length;
    return Math.round(acc);
  }, 0);
}
console.log(getAge(users));

// Методы конструктора Math
console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

const numbers = [10, 20, 30, 99];
console.log(Math.min(...numbers));

console.log(Math.ceil(1.0001));
console.log(Math.floor(1.99999));
console.log(Math.round(1.4999999));

console.log(Math.random());
// console.log(Math.random()*(max-min)+min);
console.log(Math.floor(Math.random() * (10 - 5) + 5));
console.log((Math.random() * 6).toFixed(4));

console.log(Number.parseInt("2.5kg"));
console.log(Number.parseFloat("2.5kg"));
