const quests = [
  {
    type: "punctuation",
    title: "Quest 1: Sumagot ka kay Mama",
    sprite: "👩‍🦱",
    timeLimit: 10,
    scenario: "Mama asks where you've been. Answer with the correct tone!",
    text: '"Bakit ngayon ka lang umuwi__"',
    options: ["?", "!", "."],
    answer: "?",
    failMsg: "You used the wrong tone! Mama is furious!",
  },
  {
    type: "capitalization",
    title: "Quest 2: Kailangan mong Puntahan si Mama",
    sprite: "🏃‍♂️",
    timeLimit: 15,
    scenario:
      "You are running past the barangay hall. 'Dapat nasa bahay ka na nang alas-tres!'",
    text: "Nakita mo si ____ sa kanto.",
    options: ["kapitan", "Kapitan"],
    answer: "Kapitan",
    failMsg: "You got delayed because you forgot proper nouns! It's past 3 PM!",
  },
  {
    type: "Spelling",
    title: "Quest 3: Utang kay Aling Myrna",
    sprite: "🏪",
    timeLimit: 20,
    scenario: "Mama gave you a poorly written list. Figure out what she means:",
    text: "Buy 1 bottle of 'Manteyka'. What is the correct spelling?",
    answer: "Mantika",
    failMsg: "Aling Myrna didn't understand you! You came home empty-handed!",
  },
  {
    type: "reading",
    title: "Quest 4: Pinagluto ka ni Mama",
    sprite: "🍲",
    timeLimit: 30,
    scenario:
      "Mama left a recipe: 'Boil pork with soy sauce, vinegar, garlic, and bay leaves.'",
    text: "What are you cooking?",
    options: ["Sinigang", "Adobo", "Tinola"],
    answer: "Adobo",
    failMsg: "You cooked the wrong dish! Dinner is ruined!",
  },
];

let currentLevel = 0;
let timer;
let timeLeft;

function startGame() {
  document.getElementById("screen-start").classList.remove("active");
  document.getElementById("screen-game").classList.add("active");
  currentLevel = 0;
  loadLevel();
}

function loadLevel() {
  if (currentLevel >= quests.length) {
    winGame();
    return;
  }

  const q = quests[currentLevel];
  document.getElementById("level-title").innerText = q.title;
  document.getElementById("character-sprite").innerText = q.sprite;
  document.getElementById("scenario-text").innerText = q.scenario;
  document.getElementById("question-text").innerText = q.text;

  // UI Switcher based on quest type
  const optionsContainer = document.getElementById("options-container");
  const inputContainer = document.getElementById("input-container");

  optionsContainer.innerHTML = "";

  if (q.type === "Spelling") {
    optionsContainer.style.display = "none";
    inputContainer.style.display = "flex";
    document.getElementById("spelling-input").value = "";
  } else {
    inputContainer.style.display = "none";
    optionsContainer.style.display = "flex";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(opt);
      optionsContainer.appendChild(btn);
    });
  }

  startTimer(q.timeLimit);
}

function startTimer(seconds) {
  clearInterval(timer);
  timeLeft = seconds;
  updateTimerUI();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timer);
      triggerGameOver("Time's up! " + quests[currentLevel].failMsg);
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById("timer").innerText = `⏳ ${timeLeft}s`;
}

function checkSpelling() {
  const userInput = document.getElementById("spelling-input").value.trim();
  checkAnswer(userInput);
}

function checkAnswer(selected) {
  clearInterval(timer);
  const q = quests[currentLevel];

  // Case-insensitive check for spelling
  if (selected.toLowerCase() === q.answer.toLowerCase()) {
    currentLevel++;
    loadLevel();
  } else {
    triggerGameOver("Mali! " + q.failMsg);
  }
}

function triggerGameOver(reason) {
  clearInterval(timer);
  document.getElementById("screen-game").classList.remove("active");
  document.getElementById("screen-gameover").classList.add("active");
  document.getElementById("gameover-reason").innerText = reason;
}

function winGame() {
  clearInterval(timer);
  document.getElementById("screen-game").classList.remove("active");
  document.getElementById("screen-victory").classList.add("active");
}

function resetGame() {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-start").classList.add("active");
}
