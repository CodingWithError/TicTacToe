let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let turnO = true; // playerX, playerO

// this is the win pattern.
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// this function says whether you have clicked the button.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turnO){
      box.innerText='O';
      turnO =false;
    }else{
      box.innerText='X';
      turnO=true;
    }
  });
});
