// 1. Написать функцию copy(target, origin)

const origin = {
  firstName: "Petya",
  age: 30,
  isAdmin: true,
};

function copy(obj) {
  const objNew = {};
  for (const key in obj) {
    const value = obj[key];
    objNew[key] = value;
  }
  return objNew;
}
const target = copy(origin);
console.log(target);

// 2. Напишите функцию, принимающую и сравнивающую два объекта
const obj1 = {
  id: 1,
  name: "Peter",
};
const obj2 = {
  id: 1,
  name: "Peter",
};
function comparison(x, y) {
  for (let p in x) {
    if (x[p] !== y[p]) {
      return false;
    }
  }
  for (let p in y) {
    if (x[p] !== y[p]) {
      return false;
    }
  }
  return true;
}
console.log(comparison(obj1, obj2));

// 3 Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква
const newString = "aaabbcd";
function countLetter(str) {
  const result = {};
  const letter = str.split("");
  for (let i = 0; i < letter.length; i++) {
    let count = result[letter[i]] ? result[letter[i]] : 0;
    result[letter[i]] = count + 1;
  }
  return result;
}
console.log(countLetter(newString));
