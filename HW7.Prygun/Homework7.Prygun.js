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
  color: undefined,
};
const obj2 = {
  id: 1,
  name: "Peter",
  color: undefined,
  description: undefined,
};
// булевая проверка на наличие ключа:
function hasKeyInObject(key, obj) {
  return key in obj;
}

function comparison(x, y) {
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }
  for (const key in x) {
    if (!hasKeyInObject(key, y)) {
      return false;
    }
    if (x[key] !== y[key]) {
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
  for (let i = 0; i < str.length; i++) {
    let count = result[str[i]] ? result[str[i]] : 0;
    result[str[i]] = count + 1;
  }
  return result;
}
console.log(countLetter(newString));
