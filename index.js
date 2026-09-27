// I need to have a variable that holds homescore
// I need to have a variable that away homescore
// I need an onclick event handler on each ofthe butons in the html
// I need to have functions that takes what is in the current
// homescore or awayscore and updates its textCont with the value of the buttons

let homeEl = document.querySelector("#home-el");
let guestEl = document.querySelector("#guest-el");
let homeScore = 0;
let guestScore = 0;

function hAddOnePoint() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function hAddTwoPoints() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function hAddThreePoints() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function gAddOnePoint() {
  guestScore += 1;
  guestEl.textContent = homeScore;
}

function gAddTwoPoints() {
  guestScore += 2;
  guestEl.textContent = homeScore;
}

function gAddThreePoints() {
  guestScore += 3;
  guestEl.textContent = homeScore;
}
