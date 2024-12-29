// grab score elements from the DOM
let homeScoreEl = document.getElementById('home-score-el');
let guestScoreEl = document.getElementById('guest-score-el');

// grab score divs to highlight leader
let homeScoreDiv = document.getElementById('home-score-div');
let guestScoreDiv = document.getElementById('guest-score-div');

let homeScore = Number(homeScoreEl.textContent);
let guestScore = Number(guestScoreEl.textContent);

// create functions. onclick added in index.html
function addOneHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addTwoHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addThreeHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeScoreDiv.style.border = "2px solid yellow";
        guestScoreDiv.style.border = "none";
    } else if (homeScore < guestScore) {
        guestScoreDiv.style.border = "2px solid yellow";
        homeScoreDiv.style.border = "none";
    } else {
        homeScoreDiv.style.border = "none";
        guestScoreDiv.style.border = "none";
    }
}