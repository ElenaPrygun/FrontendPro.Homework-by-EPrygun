const wrapper = document.querySelector(".wrapper");

if (wrapper !== null) {
  const form = document.createElement("form");
  const result = document.createElement("div");

  const inputForEmail = document.createElement("input");
  inputForEmail.type = "text";
  inputForEmail.style.margin = "10px";
  inputForEmail.placeholder = "Your email";
  let valueOfEmail;
  let valueOfPassword = "";
  inputForEmail.addEventListener("input", (event) => {
    valueOfEmail = event.target.value;
    sendButton.disabled =
      !isValidEmail(valueOfEmail) || !isValidPassword(valueOfPassword);
    if (!isValidEmail(valueOfEmail)) {
      inputForEmail.style.border = "1px solid red";
    } else {
      inputForEmail.style.border = "";
    }
  });

  function isValidEmail() {
    return /^([-.\w]+@([\w-]+\.)+[\w-]+)$/.test(valueOfEmail);
  }

  const inputForPassword = document.createElement("input");
  inputForPassword.type = "password";
  inputForPassword.style.margin = "10px";
  inputForPassword.placeholder = "Your password";
  inputForPassword.addEventListener("input", (event) => {
    valueOfPassword = event.target.value;
    sendButton.disabled =
      !isValidEmail(valueOfEmail) || !isValidPassword(valueOfPassword);
    if (!isValidPassword(valueOfPassword)) {
      inputForPassword.style.border = "1px solid red";
    } else {
      inputForPassword.style.border = "";
    }
  });

  function isValidPassword() {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(
      valueOfPassword
    );
  }

  const sendButton = document.createElement("button");
  sendButton.innerHTML = "SEND";
  sendButton.disabled = true;

  sendButton.addEventListener("click", () => {
    const customerInfo = document.createElement("div");
    customerInfo.innerHTML = `{Your email:${valueOfEmail}, Your password:${valueOfPassword} }`;

    result.appendChild(customerInfo);
    inputForEmail.value = "";
    inputForPassword.value = "";
    sendButton.disabled = true;
  });

  form.appendChild(inputForEmail);
  form.appendChild(inputForPassword);
  form.appendChild(sendButton);

  wrapper.appendChild(form);
  wrapper.appendChild(result);
}
