let currentFontSize = 16;
let fontStyle = 0;
const fonts = ["Arial", "Verdana", "Courier New", "Georgia"];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function increaseFontSize() {
  currentFontSize += 2;
  updateFontSize();
}

function decreaseFontSize() {
  if (currentFontSize > 2) {
    currentFontSize -= 2;
    updateFontSize();
  }
}

function updateFontSize() {
  const elements = document.querySelectorAll("body, body *");
  elements.forEach((element) => {
    element.style.fontSize = currentFontSize + "px";
  });
}

function changeFontStyle() {
  fontStyle = (fontStyle + 1) % fonts.length;
  const elements = document.querySelectorAll("body, body *");
  elements.forEach((element) => {
    element.style.fontFamily = fonts[fontStyle];
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
