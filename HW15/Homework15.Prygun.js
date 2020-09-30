// Создание основных элементов и главного класса
const wrapper = document.querySelector("#wrapper");
const select = document.querySelector("select");
const divForClock = document.querySelector(".clock");

const arrayOfColors = [
  "blue",
  "red",
  "brown",
  "green",
  "coral",
  "cyan",
  "pink",
  "gold",
  "magenta",
  "salmon",
];

class Clock {
  constructor(template) {
    this.template = template;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;
    let midday;
    midday = hours >= 12 ? "PM" : "AM";

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs)
      .replace("midday", midday);

    divForClock.innerHTML = "";
    for (let i = 0; i < output.length; i++) {
      const span = document.createElement("span");
      span.innerHTML = output[i];
      span.style.color =
        arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
      divForClock.appendChild(span);
    }

    console.clear();
    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
// Создание форматов и событий
let firstFormat = new Clock("h:m:s");
let secondFormat = new Clock("h:m:s midday");

function chooseFormat(e) {
  e.preventDefault();
  e.stopPropagation();
  if (e.currentTarget.value === "format1") {
    firstFormat.start();
    secondFormat.stop();
  } else if (e.currentTarget.value === "format2") {
    firstFormat.stop();
    secondFormat.start();
  } else {
    throw new Error("Format does not exist");
  }
}

select.addEventListener("change", chooseFormat, true);

firstFormat.start();
