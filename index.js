let homeScore = document.getElementById('home')
let guestScore = document.getElementById('guest')

homeScore.textContent = 0;
guestScore.textContent = 0;

setStyles(homeScore);
setStyles(guestScore);

function setStyles(element) {
  element.style.height = "120px";
  element.style.top = "125px";
  element.style.left = "100px";
  element.style.fontFamily = "Cursed Timer ULiL";
  element.style.fontWeight = "400";
  element.style.fontSize = "90px";
  element.style.lineHeight = "126.67px";
  element.style.textAlign = "center";
  element.style.color = "#F94F6D";
}

function updateScoreAndColor(element, score) {
  element.textContent = score;
  if (homeScore.textContent > guestScore.textContent) {
    homeScore.style.color = "#10B981"; // Leading score color is green
    guestScore.style.color = "#F94F6D"; // Reset other score to default color
  } else  if (homeScore.textContent < guestScore.textContent) {
    guestScore.style.color = "#10B981"; // Leading score color is green
    homeScore.style.color = "#F94F6D"; // Reset other score to default color
  } else {
    // If scores are equal, reset both colors to default
    homeScore.style.color = "#F94F6D";
    guestScore.style.color = "#F94F6D";
  }
}

function incrementScore1Home() {
  let currentScore = parseInt(homeScore.textContent);
  updateScoreAndColor(homeScore, currentScore + 1);
}

function incrementScore2Home() {
  let currentScore = parseInt(homeScore.textContent);
  updateScoreAndColor(homeScore, currentScore + 2);
}

function incrementScore3Home() {
  let currentScore = parseInt(homeScore.textContent);
  updateScoreAndColor(homeScore, currentScore + 3);
}

function incrementScore1Guest() {
  let currentScore = parseInt(guestScore.textContent);
  updateScoreAndColor(guestScore, currentScore + 1);
}

function incrementScore2Guest() {
  let currentScore = parseInt(guestScore.textContent);
  updateScoreAndColor(guestScore, currentScore + 2);
}

function incrementScore3Guest() {
  let currentScore = parseInt(guestScore.textContent);
  updateScoreAndColor(guestScore, currentScore + 3);
}

