// 1
let userName = prompt ("Как тебя зовут?");
let userAge = +prompt ("Какого ты года рождения?");
if (Number.isNaN(userAge)){
  alert ("Invalid Type!")
};
let userAgeModified = 2020 - Number(userAge);
let personalData = userName + " " + userAgeModified;  
alert (personalData);

// 2
let a;
let b;
let c;
a = 5432;
b = 1557;
c = 124;
let totalAmount = a + b + c;
console.log (`Общая сумма: ${totalAmount}`);
// Использовала конструкцию if вместо тернарного оператора, чтобы указать какие конкретно числа являются четными. С тернарным оператором выводилось просто "четное" 
if (a % 2 === 0){
  console.log (`Число ${a} является четным`);
};
if (b % 2 === 0){
  console.log (`Число ${b} является четным`);
};
if (c % 2 === 0){
  console.log (`Число ${c} является четным`);
};

// 3 Использовала переменные a, b, c, с предыдущего задания
const arithmeticalMean = (a + b + c) / 3;
console.log (`Среднее арифместическое a, b & c : ${arithmeticalMean}`);


// 4
const hardTask = 12345;
const firstValue = 12345 % 10;
const secondValue = (hardTask - firstValue*1) % 100/10;
const thirdValue = (hardTask - firstValue*1 - secondValue*10) %1000 /100;
const fourthValue = (hardTask - firstValue*1 - secondValue*10 - thirdValue*100) %10000 /1000;
const fifthValue = (hardTask - firstValue*1 - secondValue*10 - thirdValue*100 - fourthValue*1000) %100000 /10000;
const hardSolution = firstValue + " "+ secondValue +" " + thirdValue + " " + fourthValue + " " + fifthValue ;

console.log (hardSolution);

// 5
let firstNumber = 1456435;
let secondNumber = 54564336;
let minNumber = Math.min(firstNumber,secondNumber);
let maxNumber = Math.max(firstNumber,secondNumber);
console.log (`Минимальное число: ${minNumber}, Максимальное число: ${maxNumber}`);

// 6
const randomNumber = 15646;
const remainder = randomNumber % 2;
const isRemainder = remainder === 0 ? "Наше число четное": "Наше число нечетное";
console.log (isRemainder);

let numberToString = String (randomNumber);
let lastNumber = numberToString [ numberToString.length-1];
console.log (`Последняя цифра: ${lastNumber}`);

// 7
const adultAge = 18;
let personalName = prompt ("Your name?");
let personalAge = +prompt ("Your age?");
if (Number.isNaN(personalAge)){
  alert ("Invalid Type!")
};
let alcoholicIdentifier = confirm ("Алкоголь употребляем?");

if (alcoholicIdentifier === true){
  if ( personalAge >= adultAge && personalAge <=40){
    alert ("Только водку с пивом не мешай..");
  }
  else if (personalAge < adultAge){
    alert ("Ты что?! Маме расскажу!");
  }
  else {
    alert ("Не злоупотребляйте");
  }
} else {
  alert ("Так держать!");
};



