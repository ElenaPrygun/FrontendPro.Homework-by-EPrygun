const button = document.querySelectorAll("button")[0];
const allTagsInWrapper = document.querySelector("#wrapper").children;
let sumOfString = 0;
let sumOfNumber = 0;
for (let i = 0; i < allTagsInWrapper.length; i++) {
  let value = Number(allTagsInWrapper[i].innerText);
  if (Number.isNaN(value)) {
    sumOfString += 1;
  } else {
    sumOfNumber += 1;
  }
}
function onClick() {
  const result = document.querySelector("#result");
  const commonAmountOfTags = document.querySelector("#wrapper").children.length;
  const amountOfP = document.querySelectorAll("#wrapper p").length;
  const amountOfSpan = document.querySelectorAll("#wrapper span").length;

  result.innerText = `Общее количество тегов: ${commonAmountOfTags}, Кол-во тегов типа "p": ${amountOfP} ,  Количество тегов типа "span": ${amountOfSpan}, Кол-во тегов, в которых числа: ${sumOfNumber}, Кол-во тегов, в которых строки: ${sumOfString} `;
}

if (button !== null) {
  button.addEventListener("click", onClick);
}
