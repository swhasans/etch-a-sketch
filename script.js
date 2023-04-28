const container = document.querySelector("#flex-container");
// container.setAttribute(
//   "style",
//   "background-color:white; border:3px solid black; height:940px; width:940px; display: grid; gap: 0px; justify-content: flex-start; align-items: stretch; margin: 0 auto; flex-wrap: wrap"
// );
console.log(container);

const userSelection = document.querySelector("#user-selection-squares");
console.log(userSelection);

function clearBox() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const appendNumberofDivsSelectedByUser = function (e) {
  clearBox();

  console.log(e.target.value);
  for (let i = 0; i < Number(e.target.value); i++) {
    const newDiv = document.createElement("div");
    // newDiv.setAttribute(
    //   "style",
    //   "background-color:peachpuff; border:1px solid brown; height:100px; width:100px"
    // );
    container.appendChild(newDiv);
  }
};

userSelection.addEventListener("input", appendNumberofDivsSelectedByUser);
