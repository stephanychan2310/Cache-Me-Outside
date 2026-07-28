const quests = [
  {
    type: "Punctuation",
    title: "Sumagot ka kay Mama (Punctuation)",
    sprite: "👩‍🦱",
    timeLimit: 10,
    scenario: "Mama asks where you've been. Answer with the correct tone!",
    text: '"Naglaro lang po kasama mga kaibigan__"',
    options: ["?", "!", "."],
    answer: ".", 
    failMsg: "You used the wrong tone! Mama is furious!",
  },
  { 
    type: "Capitalization",
    title: "Puntahan si Mama (Spelling/Pagbabaybay)",
    sprite: "🏃‍♂️",
    timeLimit: 15, 
    scenario:
      "You are running past the barangay hall. 'Dapat nasa bahay ka na nang alas-tres!'",
    text: "Nakita mo ang ____ sa kanto.",
    options: ["Polis", "Pulis"],
    answer: "Pulis",
    failMsg: "You got delayed because you forgot proper nouns! It's past 3 PM!",
  },
  {
    type: "Spelling",
    title: "Utang kay Aling Myrna (Spelling/Pagbabaybay)",
    sprite: "🏪",
    timeLimit: 20,
    scenario: "Mama gave you a poorly written list. Figure out what she means:",
    text: "Buy 1 bottle of 'Manteyka'. What is the correct spelling?",
    answer: "Mantika",
    failMsg: "Aling Myrna didn't understand you! You came home empty-handed!",
  },
  {
    type: "Reading",
    title: "Pinagluto ka ni Mama (Comprehension/Pag-intindi)",
    sprite: "🍲",
    timeLimit: 30,
    scenario:
      "Mama left a recipe: 'Boil pork with soy sauce, vinegar, garlic, and bay leaves.'",
    text: "What are you cooking?",
    options: ["Paksiw na tilapia", "Adobong baboy", "Sinigang na Hipon"],
    answer: "Adobong baboy",
    failMsg: "You cooked the wrong dish! Dinner is ruined!",
  },
  {
    type: "Spelling",
    title: "Grocery (Spelling/Pagbabaybay)",
    sprite: "🏪",
    timeLimit: 20,
    scenario: "Mama gave you a poorly written list. Figure out what she means:",
    text: "Buy 2 packs of 'chloren'. What is the correct spelling?",
    answer: "chlorine", 
    failMsg: "Aling Myrna didn't understand you! You came home empty-handed!",
  }, 
  {
    type: "Punctuation",
    title: "Sumagot ka kay Mama (Punctuation)",
    sprite: "👩‍🦱",
    timeLimit: 10,
    scenario: "Mama calls out to you-- 'anak...' Answer with the correct tone!",
    text: '"Bakit po__',
    options: ["?", ".", "!"],
    answer: ".",  
    failMsg: "You used the wrong tone! Mama is furious!",
  },
];

const buttonSound = new Audio(''); 

function playSound() {
  if (buttonSound.src && buttonSound.src !== window.location.href) {
    buttonSound.play().catch(e => console.log("Audio"));
  } 
}

let currentLevel = 0;
let timer;
let timeLeft;
let maxLives = 3;
let lives = maxLives;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- stat system ---
let mistakeDatabase = {
  "Punctuation": 0,
  "Capitalization": 0,
  "Spelling": 0,
  "Reading": 0 
};

function recordMistake(categoryType) { 
  if (mistakeDatabase[categoryType] !== undefined) {
    mistakeDatabase[categoryType]++; 
  }
  console.log("dot", mistakeDatabase); 
}

function renderStats(containerId) { 
  const container = document.getElementById(containerId);
  let html = "<ul style='list-style:none; padding:0; line-height: 1.5; margin:0;'>";
  
  let totalMistakes = 0;
  for (const [category, count] of Object.entries(mistakeDatabase)) {
    html += `<li>${category} Errors: <span style="color:${count > 0 ? '#e74c3c' : '#2ecc71'}">${count}</span></li>`;
    totalMistakes += count; 
  }
  
  html += "</ul>";
  html += `<p style="text-align:center; margin-top:10px; color:#f1c40f; line-height: 1.8">Total Mistakes: ${totalMistakes}</p>`;
  container.innerHTML = html;
}

function updateHeartsUI() {
  const heartsDisplay = document.getElementById("hearts-display");
  let heartsHtml = "";
  for (let i = 0; i < maxLives; i++) {
    if (i < lives) {
      heartsHtml += "❤️"; 
    } else {
      heartsHtml += "🖤"; 
    }
  }
  heartsDisplay.innerHTML = heartsHtml;
}

function showNotification(message, callback) {
  const notifBox = document.getElementById("notification-box");
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
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-menu").classList.add("active");
  generateMenu();
}

function shuffleAndReloadMenu() {
  playSound();
  shuffleArray(quests); 
  generateMenu();     
}

function generateMenu() {
  const grid = document.getElementById("quest-grid");
  grid.innerHTML = "";

  quests.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.className = "quest-btn";
    btn.innerHTML = `<span>Quest ${index + 1}: ${q.title}</span> <span class="quest-sprite">${q.sprite}</span>`;
    btn.onclick = () => startSpecificQuest(index);
    grid.appendChild(btn);
  });
}

function startSpecificQuest(index) {
  playSound();
  currentLevel = index;
  lives = maxLives; 
  updateHeartsUI();
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-game").classList.add("active");
  loadLevel();
}

function resetToMenu() {
  playSound();
  clearInterval(timer);
  resetBackground();
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-menu").classList.add("active");
  generateMenu();
}

function resetToStart() {
  playSound();
  clearInterval(timer);
  resetBackground();
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-start").classList.add("active");
}

function openStats() {
  playSound();
  resetBackground();
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-stats").classList.add("active");
  renderStats("global-stats");
}

function loadLevel() {
  if (currentLevel >= quests.length) {
    winGame();
    return;
  }

  const q = quests[currentLevel];
  const gameContainer = document.getElementById("game-container");
  
  gameContainer.classList.remove(
    "bg-punctuation", 
    "bg-capitalization", 
    "bg-spelling", 
    "bg-reading",
    "bg-default"
  );
  
  const bgClassName = "bg-" + q.type.toLowerCase();
  
  gameContainer.classList.add(bgClassName);

  document.getElementById("level-title").innerText = `Quest ${currentLevel + 1}`;
  document.getElementById("character-sprite").innerText = q.sprite;
  document.getElementById("level-title").innerText = `Quest ${currentLevel + 1}`;
  document.getElementById("character-sprite").innerText = q.sprite;
  document.getElementById("scenario-text").innerText = q.scenario;
  document.getElementById("question-text").innerText = q.text;

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
    
    const randomizedOptions = [...q.options];
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
      lives--;
      updateHeartsUI();
      recordMistake(quests[currentLevel].type); 

      if (lives <= 0) {
        triggerGameOver("Time's up! " + quests[currentLevel].failMsg);
      } else {
        showNotification("TIME'S UP!\n-1 ❤️", () => {
          loadLevel(); 
        });
      }
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById("timer").innerText = `⏳ ${timeLeft}s`;
}

function checkSpelling() {
  playSound();
  const userInput = document.getElementById("spelling-input").value.trim();
  checkAnswer(userInput);
}

function checkAnswer(selected) {
  clearInterval(timer);
  const q = quests[currentLevel];

  if (selected.toLowerCase() === q.answer.toLowerCase()) {
    currentLevel++; //hi
    loadLevel();
  } else {
    lives--;
    updateHeartsUI();
    recordMistake(quests[currentLevel].type); 

    if (lives <= 0) {
      triggerGameOver("Mali! " + q.failMsg);
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
  document.getElementById("screen-game").classList.remove("active");
  document.getElementById("screen-gameover").classList.add("active");
  document.getElementById("gameover-reason").innerText = reason;
}

function winGame() {
  clearInterval(timer);
  resetBackground();
  document.getElementById("screen-game").classList.remove("active");
  document.getElementById("screen-victory").classList.add("active");
}

function resetBackground() {
  const gameContainer = document.getElementById("game-container");
  gameContainer.classList.remove(
    "bg-punctuation", 
    "bg-capitalization", 
    "bg-spelling", 
    "bg-reading"
  );
  gameContainer.classList.add("bg-default");
}