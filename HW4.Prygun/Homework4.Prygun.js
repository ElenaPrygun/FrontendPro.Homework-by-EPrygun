// 1. Написать функцию, которая вычисляет площадь круга
function calcCircleArea(circleRadius) {
  return circleRadius * circleRadius * Math.PI;
}
// Например радиус=2, число округлила до тысячных, тогда:
console.log(calcCircleArea(2).toFixed(3));

// 2 Написать функцию, которая вычисляет длину окружности.
function calcCircleLength(circleRadius) {
  return circleRadius * (Math.PI * 2);
}
// Например радиус=3, число округлила до тысячных, тогда:
console.log(calcCircleLength(3).toFixed(3));

// 3 Написать функцию, которая вычисляет среднее арифметическое двух чисел.
function calcArithMean(a, b) {
  return (a + b) / 2;
}
console.log(calcArithMean(10, 20));

// 4 Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.

function calcActionNumber(x, y, action) {
  switch (action) {
    case "+":
      return x + y;

    case "-":
      return x - y;

    case "*":
      return x * y;

    case "/":
      return x / y;

    case "%":
      return x % y;

    case "^":
      return x ^ y;

    default:
      return undefined;
  }
}
console.log(calcActionNumber(4, 2, "*"));
