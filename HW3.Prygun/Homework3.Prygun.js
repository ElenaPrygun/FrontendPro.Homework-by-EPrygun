// 1 Вывести на страницу в одну строку числа от 10 до 20
let solutionToTwenty = "";
for (let tenToTwenty = 10; tenToTwenty <= 20; tenToTwenty++) {
   solutionToTwenty += tenToTwenty + " ";     
}
console.log (solutionToTwenty);


// 2 Вывести квадраты чисел от 10 до 20
for ( let a = 10; a <=20; a++){
  console.log (`${a * a}`);
}

// 3 Вывести таблицу умножения на 7
const b = 7;
for (let j = 1; j < 10; j++){
  console.log (`${j} * ${b} = ${j * b}`);
}

// 4 Найти сумму всех целых чисел от 1 до 15
let sum = 0;
for (let c = 1; c <=15; c++){
  sum += c;
}
console.log (`Сумма чисел от 1 до 15 равна ${sum}`);

// 5 Найти произведение всех целых чисел от 15 до 35
let multiplication = 1;
for (let d = 15; d<=35; d++){
  multiplication = multiplication * d;
}
console.log (`Произведение чисел от 15 до 35 : ${multiplication}`);

// 6 Найти среднее арифметическое всех целых чисел от 1 до 500
let average = 500;
let sum1 = 0;
for (let f = 1; f <= 500; f++){
  sum1 += f ;
}
console.log (`Среднее арифметическое: ${sum1 / average}`);

// 7 Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80
let sum2 = 0;
for (let s = 30; s <= 80; s++){
  if (s % 2 !==0) continue;
  sum2 += s;
}
console.log (`Сумма четных чисел от 30 до 80: ${sum2}`);

// 8 Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3
for ( let n = 100; n <= 200; n++){
  if (n % 3 !== 0) continue;
  console.log (n);
}

// 9 Дано натуральное число. Найти и вывести на страницу все его делители.
// Определить количество его четных делителей
// Найти сумму его четных делителей
let number = 100;
let divisors = 0;
let evenSum = 0;
for (let i=1; i <= number; i++) {
  if (number % i === 0 ) {    
    console.log(`Все делители числа 100: ${i}`);
    if ( i % 2 === 0){
      divisors++ ;
      evenSum += i;
    }
  }   
}
console.log (divisors);
console.log (evenSum);

// 10 Напечатать полную таблицу умножения от 1 до 10
for (let e = 1; e < 10; e++){
  for (let o = 1; o < 10; o++){
    console.log (`${e} * ${o} = ${e*o}`);
  }
}

// 11 Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число.
let guessNumber = Math.floor (Math.random()*10+1);
console.log (guessNumber);
let messageOfGame;
while (true){
  let messageOfGame = prompt ("Угадай число от 0 до 10");
  if (+messageOfGame === guessNumber){
    alert ("Ура! Вы угадали!");
    break;
  }
  else if (messageOfGame === null){
    alert ("Выход из игры");
    break;
  }
  else {
    alert ("Попробуйте что-то другое");
  }
}

