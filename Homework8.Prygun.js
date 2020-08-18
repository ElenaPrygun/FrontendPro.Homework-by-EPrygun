// 1. Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.

const newString = "JavaScript";
function isSymbolPresentInString(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (symbol === str[i]) {
      return true;
    }
  }
  return false;
}
console.log(isSymbolPresentInString(newString, "J"));
// или еще такое решение перебора:
// for (const s of str) {
//   if (s === symbol){
//     return true;

// 2. Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден

const getIndexString = "hello lol";
function getSymbolIndex(str, symbol) {
  for (let b = 0; b < str.length; b++) {
    if (symbol === str[b]) {
      return b;
    }
  }
  return -1;
}
console.log(getSymbolIndex(getIndexString, "l"));

// 3 Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе
const randomNumber = 267588;

function getNumberOfEven(n) {
  let count = 0;
  const conversionToString = n.toString();
  for (let d = 0; d < conversionToString.length; d++) {
    if (conversionToString[d] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(getNumberOfEven(randomNumber));

// 4 Написать ф-цию, которая принимает два аргумента и рекурсивно их сравнивает.

const obj1 = {
  id: 1,
  name: "Helen",
  skills: {
    HTML: 10,
    CSS: 9,
    JS: 3,
    English: {
      Writing: "good",
      Grammar: "satisfactory",
      Pronunciation: "excellent",
      arr: [1, 2, 3],
    },
  },
};
const obj2 = {
  id: 1,
  name: "Helen",
  skills: {
    HTML: 10,
    CSS: 9,
    JS: 3,
    English: {
      Writing: "good",
      Grammar: "satisfactory",
      Pronunciation: "excellent",
      arr: [1, 2, 3],
    },
  },
};

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
    if (typeof x[key] === "object") {
      let nestedObjectComparisonResult = comparison(x[key], y[key]);
      if (nestedObjectComparisonResult === false) {
        return false;
      }
    } else if (x[key] !== y[key]) {
      return false;
    }
  }
  return true;
}

console.log(comparison(obj1, obj2));
