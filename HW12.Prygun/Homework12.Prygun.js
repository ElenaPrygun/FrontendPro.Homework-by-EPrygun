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

const wrapperForSecondTask = document.querySelector(".task2");

const arrayOfColors = ["blue", "green", "yellow"];

function createDivForSecondTask() {
  const container = document.createElement("div");
  container.classList.add("colors");
  let colorIndex = 0;
  container.style.background = arrayOfColors[colorIndex];

  container.addEventListener("click", () => {
    if (colorIndex + 1 === arrayOfColors.length) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
    container.style.background = arrayOfColors[colorIndex];
  });

  return container;
}

for (let i = 0; i < 5; i++) {
  const square = createDivForSecondTask();

  wrapperForSecondTask.appendChild(square);
}

// 3 Сделать список. По клику на любой из элементов он выделяется красным цветом.

const ul = document.querySelector(".task3");

ul.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;
  let target = e.target;
  for (let li of document.querySelectorAll("li")) {
    li.classList.remove("red");
  }
  target.classList.add("red");
});
