"use strict";
// console.log(
//   (document.querySelector(".message").textContent = "correct answer 🎉")
// );

// console.log((document.querySelector(".guess").value = 23));
// document.querySelector(".score").textContent = 13;
// document.querySelector(".number").textContent = 17;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".number").style.opacity = "0";
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "😏 No NUmber";
  } else if (guess === secretNumber) {
    displayMessage("🎉 correct number");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.opacity = "1";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("📈  high guess")
        : displayMessage("📉  low guess");
      score--;
      displayScore(score);
    } else {
      displayMessage("😥 you lost");
      document.querySelector(".score").textContent = 0;
    }
  }
  // if the role more than one word we make it camel case
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").style.opacity = "0";
  displayMessage("Start guessing...");
  score = 20;
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
