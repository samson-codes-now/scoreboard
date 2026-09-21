let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeScore = 0
let guestScore = 0


// home functions

function hAddOnePoint() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function hAddTwoPoints() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function hAddThreePoints() {
    homeScore += 3
    homeEl.textContent = homeScore
}

// guest functions

function gAddOnePoint() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function gAddTwoPoints() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function gAddThreePoints() {
    guestScore += 3
    guestEl.textContent = guestScore
}