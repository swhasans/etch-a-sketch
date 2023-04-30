const container = document.querySelector(".flex-container");
const userInputNumOfDiv = document.querySelector("#user-selection-squares");
const userSelectClear = document.querySelector("#user-clear-squares");
let squaresPerSide = 16;

function clearBox() { 
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function eraseBox(){
    clearBox();
    createGrid();
}

function createGrid() {
  container.style.setProperty('--squares-per-side', squaresPerSide);
  clearBox();   

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('newDiv');
    container.appendChild(newDiv);
  }
}

function numOfDivsInputtedByUser (event){
    squaresPerSide = Number(event.target.value);
    createGrid();
}

function changeColourOfDiv(event){
    event.target.style.setProperty('background-color', "black")
    console.log(event.target);
} 

userInputNumOfDiv.addEventListener("input", numOfDivsInputtedByUser);
container.addEventListener("mousedown", changeColourOfDiv);
userSelectClear.addEventListener("click", eraseBox);

createGrid();