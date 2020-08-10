// forEach
const newArray = [1, 2, 3, 4, 5];

function consoleOutput(num) {
  console.log(num);
  return num;
}

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(newArray, consoleOutput);

// map
const arrayForMap = [10, 20, 30, 40, 50];

function map(arr, callback) {
  const results = [];
  for (i = 0; i < arr.length; i++) {
    results.push(callback(arr[i]));
  }
  return results;
}

map(arrayForMap, consoleOutput);

// filter
const arrayForFilter = [16, 25, 37, 84];

function filter(arr, callback) {
  const resultsOfFilter = [];
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      resultsOfFilter.push(arr[i]);
    }
  }
  return resultsOfFilter;
}

let resultsOfFilter2 = filter(arrayForFilter, function (el) {
  return el % 2 === 0;
});
console.log(resultsOfFilter2);

// some
const arrayForSome = [22, 58, 64, 100];

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}
const available100 = some(arrayForSome, function (el) {
  return el === 100;
});
console.log(available100);

// every
const arrayForEvery = [5, 7, 5, 5];

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}
const all5 = every(arrayForEvery, function (el) {
  return el === 5;
});
console.log(all5);
