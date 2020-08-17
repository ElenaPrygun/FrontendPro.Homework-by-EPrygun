//  Написать функцию, которая принимает один параметр. При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее. Всё это с замыканиями.

function sum() {
  let counter = 0;
  function increment(x) {
    return (counter += x);
  }
  return increment;
}

const mySum = sum();
console.log(mySum(3));
console.log(mySum(5));
console.log(mySum(20));
