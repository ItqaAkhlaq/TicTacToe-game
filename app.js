let boxes = document.querySelectorAll("#btn");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgCon = document.querySelector("#msg-con");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX , player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgCon.classList.add("hidden");
}

boxes.forEach ((btn) =>{
    btn.addEventListener("click", ()=>{
        if(turn0){
            btn.innerText="O";
            turn0 = false;
        } else {
            btn.innerText="X";
            turn0 = true;
        }
        btn.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgCon.classList.remove("hidden");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);