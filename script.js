const container = document.querySelector(".flex-container");
const userSelection = document.querySelector("#user-selection-squares");
let squaresPerSide = 16;

function clearBox() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGrid() {
  container.style.setProperty('--squares-per-side', squaresPerSide);
  clearBox();

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('newDiv');
    container.appendChild(newDiv);
  }
};

function numOfDivsInputtedByUser (event){
    squaresPerSide = Number(event.target.value);
    createGrid();
}

userSelection.addEventListener("input", numOfDivsInputtedByUser);

createGrid();