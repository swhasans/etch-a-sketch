const container = document.querySelector(".flex-container");
const userInputNumOfDiv = document.querySelector("#user-selection-squares");
const userSelectBlack = document.querySelector("#user-color-squares-black");
const userSelectRandom = document.querySelector("#user-color-squares-random");
const userSelectClear = document.querySelector("#user-clear-squares");
let squaresPerSide = 16;

function clearBox() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function eraseBox() {
  clearBox();
  createGrid();
}

function createGrid() {
  container.style.setProperty("--squares-per-side", squaresPerSide);
  clearBox();

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    container.appendChild(newDiv);
  }
}

function numOfDivsInputtedByUser(event) {
  squaresPerSide = Number(event.target.value);
  createGrid();
}

function changeColourOfDivtoBlack(event) {
  event.target.style.setProperty("background-color", "black");
}

function changeColourOfDivtoRandom(event) {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("randomColor : " + randomColor);
  event.target.style.setProperty("background-color", randomColor);
}

userInputNumOfDiv.addEventListener("input", numOfDivsInputtedByUser);

if (userSelectBlack) {
  userSelectBlack.addEventListener("click", function () {
    container.removeEventListener("mousedown", changeColourOfDivtoRandom);
    container.addEventListener("mousedown", changeColourOfDivtoBlack);
  });
}

if (userSelectRandom) {
  userSelectRandom.addEventListener("click", function () {
    container.removeEventListener("mousedown", changeColourOfDivtoBlack);
    container.addEventListener("mousedown", changeColourOfDivtoRandom);
  });
}

userSelectClear.addEventListener("click", eraseBox);

createGrid();
container.addEventListener("mousedown", changeColourOfDivtoBlack);


