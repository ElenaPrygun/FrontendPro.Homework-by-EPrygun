// 1 Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.
// * сделать чтоб внутри квадратов были кнопки +/-

const divsWithNumbers = document.querySelectorAll(".numbers");
const arrayOfNumbers = Array.from(divsWithNumbers);

arrayOfNumbers.forEach((el) => {
  let count = 0;

  const plusButton = document.createElement("button");
  plusButton.innerHTML = "+";
  plusButton.addEventListener("click", () => {
    el.innerHTML = ++count;
    el.appendChild(plusButton);
    el.appendChild(minusButton);
  });

  const minusButton = document.createElement("button");
  minusButton.innerHTML = "-";
  minusButton.addEventListener("click", () => {
    el.innerHTML = --count;
    el.appendChild(plusButton);
    el.appendChild(minusButton);
  });

  el.appendChild(plusButton);
  el.appendChild(minusButton);
});

// Without buttons:
// arrayOfNumbers.forEach((el) => {
//   el.addEventListener("click", () => (el.innerText = ++el.innerText));
// });

// 2 Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

const divsWithColors = document.querySelectorAll(".colors");
const arrayOfColorDivs = Array.from(divsWithColors);

arrayOfColorDivs.forEach((el) => {
  el.classList.add("blue");
  el.addEventListener("click", () => {
    if (el.classList.contains("blue")) {
      el.classList.remove("blue");
      el.classList.add("green");
    } else if (el.classList.contains("green")) {
      el.classList.remove("green");
      el.classList.add("yellow");
    } else if (el.classList.contains("yellow")) {
      el.classList.remove("yellow");
      el.classList.add("blue");
    }
  });
});

// 3 Сделать список. По клику на любой из элементов он выделяется красным цветом.
const list = document.querySelectorAll("li");
const arrayOfListItem = Array.from(list);

arrayOfListItem.forEach((el) => {
  el.addEventListener("click", function (e) {
    let active = document.querySelector(".red");
    if (active) active.classList.remove("red");
    e.target.classList.add("red");
  });
});
