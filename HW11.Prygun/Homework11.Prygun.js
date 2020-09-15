const wrapper = document.querySelector("#wrapper");
if (wrapper !== null) {
  const list = document.createElement("ul");

  const okButton = document.createElement("button");
  okButton.innerHTML = "OK";
  okButton.classList.add("button");
  okButton.disabled = true;
  okButton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = input.value;

    const editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("button");
    editButton.addEventListener("click", () => {
      let inputValue = prompt("Edit name:", input.value);
      if (inputValue !== null) {
        li.innerHTML = inputValue;
        li.appendChild(editButton);
        li.appendChild(delButton);
      }
    });

    const delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", () => {
      if (confirm("Delete user?")) {
        li.remove();
      }
    });

    li.appendChild(editButton);
    li.appendChild(delButton);

    list.appendChild(li);
    input.value = "";
    okButton.disabled = true;
    input.focus();
  });

  const form = document.createElement("div");
  const labelForUser = document.createElement("label");
  labelForUser.innerHTML = "User name:";
  labelForUser.style.margin = "10px";

  const input = document.createElement("input");
  input.placeholder = "Enter text";
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    okButton.disabled = value === "";
  });

  form.appendChild(labelForUser);
  form.appendChild(input);
  form.appendChild(okButton);

  // Work with existing users

  const users = ["Vasya", "Petya", "Denis", "Anton"];

  users.forEach((el, i, arr) => {
    arr[i] = document.createElement("li");
    arr[i].innerHTML = el;

    const editButton1 = document.createElement("button");
    editButton1.innerHTML = "EDIT";
    editButton1.classList.add("button");
    editButton1.addEventListener("click", () => {
      let inputValue = prompt("Edit name:");
      if (inputValue !== null) {
        arr[i].innerHTML = inputValue;
        arr[i].appendChild(editButton1);
        arr[i].appendChild(delButton1);
      }
    });

    const delButton1 = document.createElement("button");
    delButton1.innerHTML = "Delete";
    delButton1.addEventListener("click", () => {
      if (confirm("Delete user?")) {
        arr[i].remove();
      }
    });

    arr[i].appendChild(editButton1);
    arr[i].appendChild(delButton1);
    list.appendChild(arr[i]);
  });

  wrapper.appendChild(form);
  wrapper.appendChild(list);
}
