const container = document.querySelector("#flex-container");
container.setAttribute(
  "style",
  "background-color:white; border:3px solid black; height:850px; width:850px; display: flex"
);
console.log(container);

const userSelection = document.querySelector("#user-selection-squares");
console.log(userSelection);

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

const appendNumberofDivsSelectedByUser = function (e) {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    console.log(e.target.value);
    for (let i = 0; i < Number(e.target.value); i++) {
      const newDiv = (document.createElement("div"));
      newDiv.setAttribute(
          "style",
          "background-color:peachpuff; border:1px solid brown; height:100px; width:100px"
        );    
      container.appendChild(newDiv); 
    }
  };

  userSelection.addEventListener('input', appendNumberofDivsSelectedByUser);


