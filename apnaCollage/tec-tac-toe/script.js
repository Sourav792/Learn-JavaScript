let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerO , playerX

// 2D Array
// check 2D array 1arr let write arr[0]
// check 2D array 2arr let write arr[1]
// check 2D array 1arr ka 2 position let write arr[0][2]

const winPattern = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) { // player o ke turn
        box.innerHTML = "O";
        turnO = false;
        } else { // player x ke turn
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const diasbledBoxes = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
     msg.innerText = `congratulations, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     diasbledBoxes();
}

const checkWinner = () => {
    for( let pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
