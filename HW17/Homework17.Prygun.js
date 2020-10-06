const wrapper = document.querySelector("#wrapper");
const divForParagraphs = document.createElement("div");

const input = document.createElement("input");
input.style.margin = "20px";
input.placeholder = "Enter text";

const saveButton = document.createElement("button");
saveButton.innerHTML = "SAVE";

const KEY = "User name:";

let itemsArray = readData();
saveData(itemsArray);

const data = JSON.parse(localStorage.getItem(KEY));

const paragraphMaker = (text) => {
  const paragraph = document.createElement("p");
  const span = document.createElement("span");
  span.innerHTML = text;
  paragraph.appendChild(span);

  const delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.style.margin = "20px";

  delButton.addEventListener("click", () => {
    paragraph.remove();
    itemsArray = Array.from(divForParagraphs.children).map(
      (child) => child.querySelectorAll("span")[0].innerText
    );
    saveData(itemsArray);
  });

  paragraph.appendChild(delButton);
  divForParagraphs.appendChild(paragraph);
};

saveButton.addEventListener("click", () => {
  itemsArray.push(input.value);
  saveData(itemsArray);
  paragraphMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  paragraphMaker(item);
});

function saveData(arrayToSave) {
  localStorage.setItem(KEY, JSON.stringify(arrayToSave));
}

function readData() {
  return localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];
}

wrapper.appendChild(input);
wrapper.appendChild(saveButton);
wrapper.appendChild(divForParagraphs);
