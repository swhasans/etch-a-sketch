// Selecting the container, input fields, and buttons
const container = document.querySelector(".flex-container");
const userInputNumOfDiv = document.querySelector("#user-selection-squares");
const userSelectBlack = document.querySelector("#user-color-squares-black");
const userSelectRandom = document.querySelector("#user-color-squares-random");
const userSelectWhite = document.querySelector("#user-color-squares-white");
const userSelectClear = document.querySelector("#user-clear-squares");

// Initializing the number of squares per side to 16
let squaresPerSide = 16;

// Function to clear the grid
function clearBox() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Function to erase the grid and create a new one based on the user's input
function eraseBox() {
  clearBox();
  createGrid();
}

// Function to create the grid based on the number of squares per side
function createGrid() {
  // Set the number of squares per side as a CSS variable
  container.style.setProperty("--squares-per-side", squaresPerSide);

  // Clear the grid first
  clearBox();

  // Create the new grid with the given number of squares per side
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    container.appendChild(newDiv);
  }
}

// Function to update the number of squares per side based on the user's input
function numOfDivsInputtedByUser(event) {
  squaresPerSide = Number(event.target.value);
  createGrid();
}

// Function to change the color of a square to black when clicked
function changeColourOfDivtoBlack(event) {
  event.target.style.setProperty("background-color", "black");
}

// Function to change the color of a square to white when clicked
function changeColourOfDivtoWhite(event) {
  event.target.style.setProperty("background-color", "white");
}

// Function to change the color of a square to a random color when clicked
function changeColourOfDivtoRandom(event) {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("randomColor : " + randomColor);
  event.target.style.setProperty("background-color", randomColor);
}

// Event listener for when the user inputs the number of squares per side
userInputNumOfDiv.addEventListener("input", numOfDivsInputtedByUser);

// Event listeners for when the user selects to color the squares black, white or random
if (userSelectBlack) {
  userSelectBlack.addEventListener("click", function () {
    // Remove the random and white color event listener and add the black color event listener
    container.removeEventListener("mousedown", changeColourOfDivtoRandom);
    container.removeEventListener("mousedown", changeColourOfDivtoWhite);
    container.addEventListener("mousedown", changeColourOfDivtoBlack);
  });
}

if (userSelectRandom) {
  userSelectRandom.addEventListener("click", function () {
    // Remove the black and white color event listener and add the random color event listener
    container.removeEventListener("mousedown", changeColourOfDivtoBlack);
    container.removeEventListener("mousedown", changeColourOfDivtoWhite);
    container.addEventListener("mousedown", changeColourOfDivtoRandom);
  });
}

if (userSelectWhite) {
  userSelectWhite.addEventListener("click", function () {
    // Remove the black and random color event listener and add the white event listener
    container.removeEventListener("mousedown", changeColourOfDivtoBlack);
    container.removeEventListener("mousedown", changeColourOfDivtoRandom);
    container.addEventListener("mousedown", changeColourOfDivtoWhite);
  });
}

// Event listener for when the user wants to clear the grid
userSelectClear.addEventListener("click", eraseBox);

// Create the grid with black color as the default
createGrid();
container.addEventListener("mousedown", changeColourOfDivtoBlack);
