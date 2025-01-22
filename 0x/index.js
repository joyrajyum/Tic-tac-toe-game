let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgBox=document.querySelector(".msgBox");
let msg=document.querySelector(".msg");
let draw=document.querySelector(".drawmsg");

let turn0 = true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0=true;
    enableBoxes();
    msgBox.classList.add("hide");
}; 
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();

    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner =(winner) => {
    msg.innerText = `GAME OVER__ ${winner} wins`;
    msgBox.classList.remove("hide");
    disableBoxes();
const showDraw =() => {
    draw.innerText = `DRWA !! TIE`;
}
    
};
const checkWinner =() =>{
    for(let pattern of winPattern){
       let pos1val =boxes[pattern[0]].innerText;
       let pos2val =boxes[pattern[1]].innerText;
       let pos3val =boxes[pattern[2]].innerText;

       if(pos1val !=""&& pos2val !=""&& pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("WINNER",pos1val);
            showWinner(pos1val);
       }
    }
    
    }
};
reset.addEventListener("click",resetGame);