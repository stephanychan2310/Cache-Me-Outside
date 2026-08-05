// ==========================================
// QUESTS & QUESTION BANKS
// ==========================================

const questionBanks = {
  Punctuation: [
    {
      scenario: "Mama asked where you were all afternoon!",
      text: "Where have you been all afternoon ( )",
      options: ["?", "!", "."],
      answer: "?",
      timeLimit: 15,
      failMsg: "Questions require a question mark!",
    },
    {
      scenario: "You broke Mama's favorite plate by accident.",
      text: "I am so sorry Mama, it was an accident ( )",
      options: [".", "?", ","],
      answer: ".",
      timeLimit: 15,
      failMsg: "Apologies end with a period!",
    },
    {
      scenario: "Mama is holding her slipper! Express your shock:",
      text: "Oh no ( ) Mama is holding the slipper!",
      options: ["!", "?", ","],
      answer: "!",
      timeLimit: 12,
      failMsg: "Shock or fear requires an exclamation mark!",
    },
  ],

  Capitalization: [
    {
      scenario: "Find the right street sign to get home before 3:00 PM!",
      text: "You are walking down ____ Street to find Mama.",
      options: ["Rizal", "rizal"],
      answer: "Rizal",
      timeLimit: 15,
      failMsg:
        "Specific street names are proper nouns and must be capitalized!",
    },
    {
      scenario: "Say hello to the local official passing by:",
      text: "Good morning, ____ Santos!",
      options: ["Captain", "captain"],
      answer: "Captain",
      timeLimit: 15,
      failMsg: "Official titles used before names must be capitalized!",
    },
    {
      scenario: "A driver offers you a ride home:",
      text: "A driver offers to take you on his ____.",
      options: ["tricycle", "Tricycle"],
      answer: "tricycle",
      timeLimit: 15,
      failMsg: "Common vehicle names should be in lowercase!",
    },
  ],

  Spelling: [
    {
      scenario: "Fix Mom's misspelled note for Aling Myrna:",
      text: "Mom wrote: 'Buy a block of CHESE for spaghetti.' Type the correct spelling:",
      answer: "Cheese",
      timeLimit: 20,
      failMsg: "Cheese is spelled C-H-E-E-S-E!",
    },
    {
      scenario: "Fix Mom's misspelled note for the sauce:",
      text: "Mom wrote: 'Get one bottle of VINAGAR.' Type the correct spelling:",
      answer: "Vinegar",
      timeLimit: 20,
      failMsg: "Vinegar ends with -gar!",
    },
    {
      scenario: "Fix Mom's misspelled note for coffee:",
      text: "Mom wrote: 'Grab a bag of SUGGAR.' Type the correct spelling:",
      answer: "Sugar",
      timeLimit: 20,
      failMsg: "Sugar has only one 'g'!",
    },
  ],

  Reading: [
    {
      scenario: "Read Mama's recipe note on the counter:",
      text: "First boil pork in tamarind broth until tender. Add radish and kangkong. What dish are you making?",
      options: ["Pork Sinigang", "Chicken Adobo", "Beef Nilaga"],
      answer: "Pork Sinigang",
      timeLimit: 20,
      failMsg: "Tamarind broth and kangkong are used for Sinigang!",
    },
    {
      scenario: "Read the banana cue recipe:",
      text: "Heat oil and melt brown sugar until caramel. Fry bananas until coated. Why do you melt the brown sugar?",
      options: [
        "To coat bananas in caramel",
        "To make it salty",
        "To cool the pan",
      ],
      answer: "To coat bananas in caramel",
      timeLimit: 20,
      failMsg: "Melted sugar turns into a sweet caramel coating!",
    },
  ],
};

const quests = [
  {
    id: 1,
    title: "SUMAGOT KA KAY MAMA (PUNCTUATION)",
    type: "Punctuation",
    icon: "👦",
    sprite: "👦",
  },
  {
    id: 2,
    title: "PUNTAHAN SI MAMA (CAPITALIZATION)",
    type: "Capitalization",
    icon: "🏃",
    sprite: "🏃",
  },
  {
    id: 3,
    title: "UTANG KAY ALING MYRNA (SPELLING)",
    type: "Spelling",
    icon: "🏪",
    sprite: "🏪",
  },
  {
    id: 4,
    title: "PINAGLUTO KA NI MAMA (READING)",
    type: "Reading",
    icon: "🍲",
    sprite: "🍲",
  },
];

const buttonSound = new Audio("sounds/btn-slick.wav");

function playSound() {
  if (buttonSound.src && buttonSound.src !== window.location.href) {
    buttonSound.play().catch((e) => console.log("Audio"));
  }
}

let currentLevel = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft;
let maxLives = 3;
let lives = maxLives;
let currentPlayer = "Guest";
let mistakeDatabase = {
  Punctuation: 0,
  Capitalization: 0,
  Spelling: 0,
  Reading: 0,
};

// Safe local storage helper to prevent crash from corrupted data
function getSafeHistory() {
  try {
    const savedData = localStorage.getItem("StatsHistory");
    return savedData ? JSON.parse(savedData) : {};
  } catch (error) {
    console.log("Corrupted save data found and cleared!");
    localStorage.removeItem("StatsHistory");
    return {};
  }
}

function startGame() {
  playSound();
  const nameInput = document.getElementById("name-input");
  currentPlayer = nameInput ? nameInput.value.trim() || "Guest" : "Guest";

  let history = getSafeHistory();

  if (history[currentPlayer]) {
    mistakeDatabase = history[currentPlayer];
  } else {
    mistakeDatabase = {
      Punctuation: 0,
      Capitalization: 0,
      Spelling: 0,
      Reading: 0,
    };
  }
  saveStatsToLocal();

  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const menuScreen = document.getElementById("screen-menu");
  if (menuScreen) menuScreen.classList.add("active");
  generateMenu();
}

function saveStatsToLocal() {
  let history = getSafeHistory();
  history[currentPlayer] = mistakeDatabase;
  localStorage.setItem("StatsHistory", JSON.stringify(history));
}

function recordMistake(categoryType) {
  if (mistakeDatabase[categoryType] !== undefined) {
    mistakeDatabase[categoryType]++;
    saveStatsToLocal();
  }
}

function renderStats(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  let history = getSafeHistory();

  if (Object.keys(history).length === 0) {
    container.innerHTML = "<p>No records found</p>";
    return;
  }

  for (const [name, stats] of Object.entries(history)) {
    const btn = document.createElement("button");
    btn.innerText = `👤 ${name}`;
    btn.className = "player-stat-btn";

    const statsDiv = document.createElement("div");
    statsDiv.style.display = "none";
    statsDiv.className = "player-stat-box";

    let totalMistakes = 0;
    let html =
      "<ul style='list-style:none; padding:0; line-height: 1.5; margin:0;'>";

    for (const [category, count] of Object.entries(stats)) {
      html += `<li>${category} Errors: <span style="color:${count > 0 ? "#e74c3c" : "#2ecc71"}">${count}</span></li>`;
      totalMistakes += count;
    }

    html += "</ul>";
    html += `<p style="text-align:center; margin-top:10px; color:#f1c40f;">Total Mistakes: ${totalMistakes}</p>`;
    statsDiv.innerHTML = html;

    btn.onclick = () => {
      playSound();
      if (statsDiv.style.display === "none") {
        statsDiv.style.display = "block";
      } else {
        statsDiv.style.display = "none";
      }
    };

    container.appendChild(btn);
    container.appendChild(statsDiv);
  }
}

function clearHistory() {
  playSound();
  localStorage.removeItem("StatsHistory");
  mistakeDatabase = {
    Punctuation: 0,
    Capitalization: 0,
    Spelling: 0,
    Reading: 0,
  };
  renderStats("global-stats");
  showNotification("History Cleared!");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateHeartsUI() {
  const heartsDisplay = document.getElementById("hearts-display");
  if (!heartsDisplay) return;

  let heartsHtml = "";
  for (let i = 0; i < maxLives; i++) {
    heartsHtml += i < lives ? "❤️" : "🖤";
  }
  heartsDisplay.innerHTML = heartsHtml;
}

function showNotification(message, callback) {
  const notifBox = document.getElementById("notification-box");
  if (!notifBox) {
    if (callback) callback();
    return;
  }

  notifBox.innerText = message;
  notifBox.style.display = "block";

  setTimeout(() => {
    notifBox.style.display = "none";
    if (callback) callback();
  }, 1500);
}

// MENU LOGIC
function openMenu() {
  playSound();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const menuScreen = document.getElementById("screen-menu");
  if (menuScreen) menuScreen.classList.add("active");
  generateMenu();
}

function shuffleAndReloadMenu() {
  playSound();

  // Shuffles questions inside each category instead of the menu order
  for (const category in questionBanks) {
    shuffleArray(questionBanks[category]);
  }

  generateMenu();
  showNotification("Questions Shuffled!", null);
}

function generateMenu() {
  const grid =
    document.getElementById("quest-grid") ||
    document.getElementById("quest-list");
  if (!grid) return;
  grid.innerHTML = "";

  quests.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.className = "quest-btn quest-item";
    const spriteIcon = q.icon || q.sprite || "🎮";

    btn.innerHTML = `<span>Quest ${index + 1}: ${q.title}</span> <span class="quest-sprite">${spriteIcon}</span>`;
    btn.onclick = () => startSpecificQuest(index);
    grid.appendChild(btn);
  });
}

function startSpecificQuest(index) {
  playSound();
  currentLevel = index;
  currentQuestionIndex = 0;
  lives = maxLives;
  updateHeartsUI();

  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const gameScreen = document.getElementById("screen-game");
  if (gameScreen) gameScreen.classList.add("active");

  loadLevel();
}

function resetToMenu() {
  playSound();
  clearInterval(timer);
  resetBackground();
  window.speechSynthesis.cancel(); //stops voice
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));

  const menuScreen = document.getElementById("screen-menu");
  if (menuScreen) menuScreen.classList.add("active");
  generateMenu();
}

function resetToStart() {
  playSound();
  clearInterval(timer);
  resetBackground();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));

  const startScreen = document.getElementById("screen-start");
  if (startScreen) startScreen.classList.add("active");
}

function openStats() {
  playSound();
  resetBackground();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));

  const statsScreen = document.getElementById("screen-stats");
  if (statsScreen) statsScreen.classList.add("active");
  renderStats("global-stats");
}

// GAME LEVEL RENDERING
function loadLevel() {
  if (currentLevel >= quests.length) {
    winGame();
    return;
  }

  const q = quests[currentLevel];
  const bank = questionBanks[q.type];

  if (!bank || currentQuestionIndex >= bank.length) {
    currentLevel++;
    currentQuestionIndex = 0;
    if (currentLevel >= quests.length) {
      winGame();
      return;
    }
    loadLevel();
    return;
  }

  const currentQ = bank[currentQuestionIndex];

  const gameContainer = document.getElementById("game-container");
  if (gameContainer) {
    gameContainer.classList.remove(
      "bg-punctuation",
      "bg-capitalization",
      "bg-spelling",
      "bg-reading",
      "bg-default",
    );
    gameContainer.classList.add("bg-" + q.type.toLowerCase());
  }

  const levelTitle = document.getElementById("level-title");
  if (levelTitle) levelTitle.innerText = `Quest ${currentLevel + 1}: ${q.type}`;

  const charSprite = document.getElementById("character-sprite");
  if (charSprite) charSprite.innerText = q.sprite || q.icon;

  const scenarioText = document.getElementById("scenario-text");
  if (scenarioText) scenarioText.innerText = currentQ.scenario;

  const questionText = document.getElementById("question-text");
  if (questionText) questionText.innerText = currentQ.text;

  mamaSpeaks(currentQ.scenario);

  const optionsContainer = document.getElementById("options-container");
  const inputContainer = document.getElementById("input-container");

  if (optionsContainer) optionsContainer.innerHTML = "";

  if (q.type === "Spelling") {
    if (optionsContainer) optionsContainer.style.display = "none";
    if (inputContainer) {
      inputContainer.style.display = "flex";
      const spellingInput = document.getElementById("spelling-input");
      if (spellingInput) spellingInput.value = "";
    }
  } else {
    if (inputContainer) inputContainer.style.display = "none";
    if (optionsContainer) {
      optionsContainer.style.display = "flex";

      const randomizedOptions = [...currentQ.options];
      shuffleArray(randomizedOptions);

      randomizedOptions.forEach((opt) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
          playSound();
          checkAnswer(opt);
        };
        optionsContainer.appendChild(btn);
      });
    }
  }

  startTimer(currentQ.timeLimit || 15);
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
      lives--;
      updateHeartsUI();

      const q = quests[currentLevel];
      const currentQ = questionBanks[q.type][currentQuestionIndex];
      recordMistake(q.type);

      if (lives <= 0) {
        triggerGameOver("Time's up! " + currentQ.failMsg);
      } else {
        showNotification("TIME'S UP!\n-1 ❤️", () => {
          loadLevel();
        });
      }
    }
  }, 1000);
}

function updateTimerUI() {
  const timerElem = document.getElementById("timer");
  if (timerElem) timerElem.innerText = `⏳ ${timeLeft}s`;
}

function checkSpelling() {
  playSound();
  const spellingInput = document.getElementById("spelling-input");
  const userInput = spellingInput ? spellingInput.value.trim() : "";
  checkAnswer(userInput);
}

function checkAnswer(selected) {
  window.speechSynthesis.cancel(); // stops speaking if the player already answers

  clearInterval(timer);
  const q = quests[currentLevel];
  const currentQ = questionBanks[q.type][currentQuestionIndex];

  if (selected.toLowerCase() === currentQ.answer.toLowerCase()) {
    currentQuestionIndex++;
    showNotification("CORRECT! 🎉", () => {
      loadLevel();
    });
  } else {
    lives--;
    updateHeartsUI();
    recordMistake(q.type);

    if (lives <= 0) {
      triggerGameOver("Mali! " + currentQ.failMsg);
    } else {
      showNotification("MALI!\n-1 ❤️", () => {
        loadLevel();
      });
    }
  }
}

function triggerGameOver(reason) {
  clearInterval(timer);
  resetBackground();

  const gameScreen = document.getElementById("screen-game");
  if (gameScreen) gameScreen.classList.remove("active");

  const gameoverScreen = document.getElementById("screen-gameover");
  if (gameoverScreen) gameoverScreen.classList.add("active");

  const reasonElem = document.getElementById("gameover-reason");
  if (reasonElem) reasonElem.innerText = reason;
}

function winGame() {
  clearInterval(timer);
  resetBackground();

  const gameScreen = document.getElementById("screen-game");
  if (gameScreen) gameScreen.classList.remove("active");

  const victoryScreen = document.getElementById("screen-victory");
  if (victoryScreen) victoryScreen.classList.add("active");
}

function resetBackground() {
  const gameContainer = document.getElementById("game-container");
  if (!gameContainer) return;

  gameContainer.classList.remove(
    "bg-punctuation",
    "bg-capitalization",
    "bg-spelling",
    "bg-reading",
  );
  gameContainer.classList.add("bg-default");
}

// Auto-generate menu on page load
document.addEventListener("DOMContentLoaded", () => {
  generateMenu();
});

//voice function
function mamaSpeaks(textToSay) {
  // 1. Check if the browser/phone supports text-to-speech
  if ("speechSynthesis" in window) {
    // 2. Create the speech object
    const utterance = new SpeechSynthesisUtterance(textToSay);

    // 3. Customize the voice!
    // We can try to force a Filipino accent if the phone has one installed.
    utterance.lang = "fil-PH"; // 'tl-PH' also works on some devices

    // You can make her sound more intense by tweaking pitch and speed
    utterance.pitch = 1.2; // Higher pitch (0 to 2)
    utterance.rate = 0.6; // Slightly faster talking speed (0.1 to 10)
    utterance.volume = 1.0; // Max volume (0 to 1)

    // 4. Speak!
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Text-to-speech is not supported on this device.");
  }
}
