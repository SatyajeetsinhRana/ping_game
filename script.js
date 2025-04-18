"use strict";

// declration of variables
let curr_player = 1;
let curr_id = "current--0";
let name = document.querySelector(".name");
let scoreone = document.getElementById("score--0");
let scoretwo = document.getElementById("score--1");
let roll = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let newgame = document.querySelector(".btn--new");
let dicenumber = document.querySelector(".dice");
let image = document.querySelector(".dice");
roll.disabled = false;
hold.disabled = false;

// create an array
const arr = [
  "one.png",
  "two.png",
  "three.png",
  "four.png",
  "five.png",
  "six.png",
];

// creating functions

// function for check that score is below 50 or not if not then declare curr_id winner
let checkWinCondition = function () {
  let win = false;
  if (
    Number(scoreone.textContent) >= 50 ||
    Number(scoretwo.textContent) >= 50
  ) {
    win = true;
    if (scoreone.textContent >= 50) {
      document.getElementById("popup-text").textContent =
        "Congratulations!! Player-1 wins the game";
    } else {
      document.getElementById("popup-text").textContent =
        "Congratulations!! Player-2 wins the game";
    }
    roll.disabled = true;
    hold.disabled = true;
  }
  if (win) {
    document.getElementById("win-popup").style.display = "block";
  }
};

// function to change curr_id
let change = function () {
  if (curr_id == "current--0") {
    curr_id = "current--1";
    document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
  } else {
    curr_id = "current--0";
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
  }
};

// function for creatin random varibles
let random = function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  dicenumber.textContent = String(randomNumber);
  if (randomNumber === 1) {
    document.getElementById(`${curr_id}`).textContent = 0;
    change();
  } else {
    let updated_score = Number(
      document.getElementById(`${curr_id}`).textContent
    );
    updated_score += Number(randomNumber);
    document.getElementById(`${curr_id}`).textContent = updated_score;
  }
  let x = arr[randomNumber - 1];
  image.src = String(x);
};

// function for storing values
let store = function () {
  let score_id = curr_id === "current--0" ? scoreone : scoretwo;
  let curr_score = Number(score_id.textContent);
  curr_score += Number(document.getElementById(`${curr_id}`).textContent);
  score_id.textContent = curr_score;
  change();
  checkWinCondition();
};

// function for start new game
let startnew = function () {
  dicenumber.textContent = "";
  image.src = "one.png";
  scoreone.textContent = 0;
  scoretwo.textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("win-popup").style.display = "none";
  roll.disabled = false;
  hold.disabled = false;
  curr_id = "current--1";
  change();
};

document.querySelector(".btn--roll").addEventListener("click", random);
document.querySelector(".btn--hold").addEventListener("click", store);
newgame.addEventListener("click", startnew);
