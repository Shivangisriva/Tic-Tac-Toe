let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let count=0;

let turnO = true;

const WinPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>
    {
        box.addEventListener("click" , ()=>{
          if(turnO)
          {
            box.innerText ="O";
            turnO = false;
          }
          else
          {
            box.innerText = "X";
            turnO = true;
          }
          box.disabled =true;
          count++;

         let isWinner= checkWinner();
         if(count === 9 && !isWinner)
            gameDraw();
            });
    });


   const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
         msgContainer.classList.remove("hide");
         disableBoxes();
       };


    const disableBoxes =() =>{
        for(let box of boxes){
            box.disabled = true;
        }
    };

    const enableBoxes =() =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
    };
   const showWinner= (winner) => {
    msgContainer.classList.remove("hide");
       msg.innerText=`Congratulations , Winner is ${winner}`;
       disableBoxes();
    };

    const checkWinner =() =>{
     for(let pattern of WinPatterns)
        {
   let posval1=   boxes[pattern[0]].innerText;
  let posval2 =   boxes[pattern[1]].innerText;
   let posval3 =  boxes[pattern[2]].innerText;

   if(posval1 != "" && posval2 != "" && posval3 != ""){
    if(posval1 === posval2 && posval2 ===posval3){
        showWinner(posval1);
        return true;
    }
   }
 }
};
    newGameBtn.addEventListener("click" , resetGame);
   resetBtn.addEventListener("click" , resetGame);
  
  