window.onload = function () {
  console.log("Linked successfully with the JavaScript code");
}

let userScore = 0;
let compScore = 0;
const user_span = document.getElementById("userspan");
const computer_span = document.getElementById("compspan");
const result_msg = document.querySelector(".msg");
const score_board_div = document.querySelector(".score_board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}

function win(userChoice, compChoice){
  userScore++
  console.log("win: user// " + userChoice + " - computer// " + compChoice + ".");
  user_span.innerHTML = userScore;
  result_msg.innerHTML = "WINS!!!"
  // TODO: ZAWA9 msg
}

function lose(userChoice, compChoice){
  compScore++
  console.log("lose: user// " + userChoice + " - computer// " + compChoice + ".");
  computer_span.innerHTML = compScore;
  result_msg.innerHTML = "lose!!!"
  // TODO: ZAWA9 msg
}

function draw(userChoice, compChoice){
  console.log("draw: user// " + userChoice + " - computer// " + compChoice + ".");
  result_msg.innerHTML = "DRAW!!!"
  // TODO: ZAWA9 msg
}

function game(userChoice){
  compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp": win(userChoice, compChoice); break;
    case "rp":
    case "ps":
    case "sr": lose(userChoice, compChoice); break;
    case "rr":
    case "pp":
    case "ss": draw(userChoice, compChoice); break;
  }
}

main()
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
