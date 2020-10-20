const messageWrapper = document.querySelector(".messageWrapper");
const input = document.querySelector("input");
const sendButton = document.querySelector("button");
sendButton.disabled = true;

const arrayOfAnswers = [
  "Как хорошо, что у нас есть возможность пообщаться!",
  "Как вам погодка сегодня?",
  "Эээх, сейчас бы чашечку кофе...",
  "у меня есть подозрение, что вам нравится JS;)",
  "что вы думаете по поводу искусственного интеллекта?",
  "не надоело общаться?",
  "у меня отличное настроение, а у тебя?",
];

const welcomeMessage = `Привет! Очень рада нашему общению. Если вдруг надоест- всего лишь напиши "Ой, всё!"`;

const byeMessage = "До свидания! Было приятно пообщаться!";

let welcomeMessageIsSent = false;

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

sendButton.addEventListener("click", async () => {
  try {
    let messageText = appendUserMessageToChat();
    await wait(1000);
    reply(messageText);

    let lastChildOfMessageWrapper = messageWrapper.lastChild;
    lastChildOfMessageWrapper.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
    sendButton.disabled = true;
  } catch {
    console.error("SOMETHING WENT WRONG...");
  }
});

input.addEventListener(
  "keypress",
  async function (e) {
    if (e.keyCode === 13 && input.value !== "") {
      try {
        let messageText = appendUserMessageToChat();
        await wait(1000);
        reply(messageText);

        let lastChildOfMessageWrapper = messageWrapper.lastChild;
        lastChildOfMessageWrapper.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        e.preventDefault();
      } catch {
        console.error("SOMETHING WENT WRONG...");
      }
    } else {
      sendButton.disabled = input.value === "";
    }
  },
  false
);

function appendUserMessageToChat() {
  const userMessage = document.createElement("div");
  let userMessageText = input.value;
  userMessage.innerHTML = userMessageText;
  userMessage.classList.add("userMessageStyle");
  messageWrapper.appendChild(userMessage);
  input.value = "";
  return userMessageText;
}

function reply(userMessageText) {
  if (!welcomeMessageIsSent) {
    const welcomebotMessage = document.createElement("div");
    welcomebotMessage.innerHTML = welcomeMessage;
    welcomebotMessage.classList.add("botMessageStyle");
    messageWrapper.appendChild(welcomebotMessage);
    welcomeMessageIsSent = true;
  } else if (userMessageText === "Ой, всё!") {
    const byebotMessage = document.createElement("div");
    byebotMessage.innerHTML = byeMessage;
    byebotMessage.classList.add("botMessageStyle");
    messageWrapper.appendChild(byebotMessage);
    sendButton.disabled = true;
    input.disabled = true;
  } else {
    const botMessage = document.createElement("div");
    botMessage.innerHTML =
      arrayOfAnswers[Math.floor(Math.random() * arrayOfAnswers.length)];
    botMessage.classList.add("botMessageStyle");
    messageWrapper.appendChild(botMessage);
  }
}

