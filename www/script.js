// ==========================================
// QUESTS & QUESTION BANKS
// ==========================================

const questionBanks = {
  Punctuation: [
    {
      scenario: "Mama asks where you were:",
      text: "Where have you been all afternoon ( )",
      options: ["?", "!", "."],
      answer: "?",
      timeLimit: 15,
      failMsg: "Don't yell at me! \n('!' sounds like backtalk)",
    },
    {
      scenario: "Apologizing to Mama after breaking a glass:",
      text: "I am so sorry Mama, it was an accident ( )",
      options: [".", "?", ","],
      answer: ".",
      timeLimit: 15,
      failMsg: "Are you asking or apologizing? \nUse a period!",
    },
    {
      scenario: "Expressing shock when Mama holds her slipper (tsinelas):",
      text: "Oh no ( ) Mama is holding the slipper!",
      options: ["!", "?", ","],
      answer: "!",
      timeLimit: 12,
      failMsg: "Use an exclamation mark to show shock or fear!",
    },
    {
      scenario: "Mama calling you from the kitchen:",
      text: "Juan ( ) please bring the soy sauce to the dining table!",
      options: [".", ",", "?"],
      answer: ",",
      timeLimit: 15,
      failMsg: "Add a comma after a person's name when addressing them!",
    },
    {
      scenario: "Showing excitement for dinner:",
      text: "Wow, my favorite dish is for dinner tonight ( )",
      options: [",", "?", "!"],
      answer: "!",
      timeLimit: 15,
      failMsg: "Don't sound hesitant about my cooking! \n('?' gives a doubtful tone)",
    },
    {
      scenario: "Asking permission to play outside:",
      text: "Mama, may I go outside to play with my friends ( )",
      options: [",", "?", "."],
      answer: "?",
      timeLimit: 15,
      failMsg: "Don't demand things from me! \n('!' makes it sound like an order)",
    },
    {
      scenario: "Direct quotation / Answering Mama's question:",
      text: "Mama asked, '( )What are you doing on your phone( )'",
      options: ["'' and ''", "( and )", "' and '"],
      answer: "'' and ''",
      timeLimit: 15,
      failMsg: "Use quotation marks when repeating spoken words!",
    },
    {
      scenario: "Listing items Mama asked you to buy at the sari-sari store:",
      text: "I bought vinegar ( ) soy sauce ( ) and cooking oil.",
      options: [". and .", "! and !", ", and ,"],
      answer: ", and ,",
      timeLimit: 15,
      failMsg: "Use commas to separate items in a list!",
    },
    {
      scenario: "Responding politely without backtalk:",
      text: "Yes Mama, I will finish my homework right now ( )",
      options: ["?", ".", "!"],
      answer: ".",
      timeLimit: 15,
      failMsg: "Don't raise your voice! \nA period is enough.",
    },
    {
      scenario: "A compound sentence with a conjunction:",
      text: "I want to play video games ( ) but I need to finish Mama's chores first.",
      options: ["?", ",", "!"],
      answer: ",",
      timeLimit: 15,
      failMsg: "Place a comma before the conjunction 'but'!",
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
      scenario: "You are looking for Mama.",
      text: "You ask Aling Myrna if she saw Mama earlier this ____",
      options: ["Tuesday", "tuesday"],
      answer: "Tuesday",
      timeLimit: 15,
      failMsg: "Days of the week are always capitalized!",  
    },
    {
      scenario: "A driver offers you a ride home:",
      text: "A driver offers to take you on his ____.",
      options: ["tricycle", "Tricycle"],
      answer: "tricycle",
      timeLimit: 15,
      failMsg: "Common vehicle names should be in lowercase!",
    },
    {
      scenario: "Your teacher gives your a school reminder.",
      text: "Your teacher reminds you that your ____ class starts tomorrow.",
      options: ["English", "english"],
      answer: "English",
      timeLimit: 15,
      failMsg: "Languages like English are proper nouns and must be capitalized!", 
    },
    {
      scenario: "Don't get distracted by what you see in the plaza. Get home by 4:00 PM!",
      text: "You run past the plaza decorated for the upcoming ____ festival.",
      options: ["Christmas", "christmas"],
      answer: "Christmas",
      timeLimit: 15,
      failMsg: "Names of holidays are proper nouns and must be capitalized!",  
    },
    {
      scenario: "You are passing by a church on your way home.",
      text: "You see people gathering outside the ____ Jude Parish.",
      options: ["saint", "Saint"],
      answer: "Saint",
      timeLimit: 15,
      failMsg: "Specific names of institutions and saints are capitalized!",  
    },
    {
      scenario: "Mama is already looking for you.",
      text: "Mama texted: 'It is almost ____ o'clock! Where are you? ",
      options: ["Five", "five"],
      answer: "five",
      timeLimit: 15,
      failMsg: "Numbers written as words in a sentence are common words. \nThey do not need to be capitalized unless they start a sentence. ",  
    },
    {
      scenario: "You are on your way to your neighborhood.",
      text: "You cross the Pasig ____ Bridge to get to your neighborhood.",
      options: ["River", "river"],
      answer: "River",
      timeLimit: 15,
      failMsg: "Specific names of bodies of water that are part of a proper geographic name are capitalized!",  
    },
    {
      scenario: "",
      text: "You finally reach home and greet Mama a polite '____ afternoon!' ",
      options: ["good", "Good"],
      answer: "Good",
      timeLimit: 15,
      failMsg: "The first word inside a direct quote or dialogue is always capitalized!",  
    },
  ],

  Spelling: [
    {
      scenario: "Fix Mom's spelling so Aling Myrna gives you the right dairy product:",
      text: "Mom wrote: 'Buy a block of CHESE for spaghetti.' Type the correct spelling:",
      answer: "Cheese",
      timeLimit: 20,
      failMsg: "Double 'e' makes the long /ee/ sound in cheese!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna doesn't give you the wrong bottle:",
      text: "Mom wrote: 'Get one bottle of VINAGAR for the dip.' Type the correct spelling:",
      answer: "Vinegar",
      timeLimit: 20,
      failMsg: "Vinegar ends with -gar!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna doesn't get confused:",
      text: "Mom wrote: 'Get a kilo of SHUGAR for the halo-halo.' Type the correct spelling:",
      answer: "Sugar",
      timeLimit: 20,
      failMsg: "Even though it sounds like 'sh', sugar starts with just a single 's'!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna gives you Papa's morning drink:",
      text: "Mom wrote: 'Buy 2 packs of black COFEE for Papa'.  Type the correct spelling:",
      answer: "Coffee",
      timeLimit: 20,
      failMsg: "Coffee double-checks its order—it has both double 'ff' and double 'ee'!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna hands you the right seasoning:",
      text: "Mom wrote: 'Get a bottle of soy SAUSE for the Adobo.'.  Type the correct spelling:",
      answer: "Sauce",
      timeLimit: 20,
      failMsg: "The /aw/ sound in words like sauce and cause is spelled with 'au', and it ends with a soft 'ce'!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna gives you the right baking supply:",
      text: "Mom wrote: 'Buy a carton of heavy CREEM.'.  Type the correct spelling:",
      answer: "Cream",
      timeLimit: 20,
      failMsg: "Many food words make the long /ee/ sound using 'ea' (like cream, bread, and meat)!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna sells you the pasta:",
      text: "Mom wrote: 'Buy NUDLES for the spaghetti.'.  Type the correct spelling:",
      answer: "Noodles",
      timeLimit: 20,
      failMsg: "The long /oo/ sound in words like noodles, food, and spoon is spelled with double 'oo'!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna finds the snack:",
      text: "Mom wrote: 'Buy a pack of BISKIT for meryenda.'.  Type the correct spelling:",
      answer: "Biscuit",
      timeLimit: 20,
      failMsg: "English has a silent 'u' after the 'c' in biscuit—it's spelled with '-cuit' (like circuit)!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna hands you the bakery item:",
      text: "Mom wrote: 'Get a loaf of dried BRED for breakfast'.  Type the correct spelling:",
      answer: "Bread",
      timeLimit: 20,
      failMsg: "The short /e/ sound in words like bread, head, and read is often spelled with 'ea'!",
    },
    {
      scenario: "Fix Mom's spelling so Aling Myrna gives you the treat:",
      text: "Mom wrote: 'Buy a bar of CHOCLATE for your younger sibling.'.  Type the correct spelling:",
      answer: "Chocolate",
      timeLimit: 20,
      failMsg: "Don't skip the hidden middle syllable! \nChoc-o-late has an 'o' in the middle (choc-O-late)!",
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

const buttonSound = new Audio("sounds/btn-sound.mp3");
const wrongSound = new Audio("sounds/uhoh.mp3");

let bgMusic = null;

function playSound() {
  if (buttonSound.src && buttonSound.src !== window.location.href) {
    buttonSound.play().catch((e) => console.log("Audio play suppressed"));
  }
}

function playWrongSound() {
  if (wrongSound.src && wrongSound.src !== window.location.href) {
    wrongSound.play().catch((e) => console.log("Audio play suppressed"));
  }
}

let currentLevel = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft;
let Totaltimelimit;
let maxLives = 3;
let lives = maxLives;
let currentPlayer = "Guest";
let isBgMusicPlaying = false;
let isAnsweringBlocked = false;
let activeQuests = [...quests];
let isPlayAllMode = false;
let mistakeDatabase = {
  Punctuation: 0,
  Capitalization: 0,
  Spelling: 0,
  Reading: 0,
};

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
  startBgMusic();

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
    statsDiv.className = "player-stat-box hidden";

  let totalMistakes = 0;
  let html =
    "<ul style='list-style:none; padding:0; line-height: 1.5; margin:0;'>";

  for (const [category, count] of Object.entries(stats)) {
    const errorClass = count > 0 ? "stats-error-count has-errors" : "stats-error-count";
    html += `<li>${category} Errors: <span class="${errorClass}">${count}</span></li>`;
    totalMistakes += count;
  }

  html += "</ul>";
  html += `<p class="stats-total-text">Total Mistakes: ${totalMistakes}</p>`;
  statsDiv.innerHTML = html;

  btn.onclick = () => {
    playSound();
    statsDiv.classList.toggle("hidden");
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
  stopSpeech();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const menuScreen = document.getElementById("screen-menu");
  if (menuScreen) menuScreen.classList.add("active");
  generateMenu();
}

function shuffleAndReloadMenu() {
  playSound();
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
  isPlayAllMode = false;
  activeQuests = [quests[index]];
  currentLevel = 0;
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

function playAllShuffled() {
  playSound();
  isPlayAllMode = true;
  activeQuests = shuffleArray([...quests]);
  currentLevel = 0;
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
  stopSpeech();
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
  stopSpeech();
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));

  const startScreen = document.getElementById("screen-start");
  if (startScreen) startScreen.classList.add("active");
}

function openStats() {
  playSound();
  stopSpeech();
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
  isAnsweringBlocked = false;

  if (currentLevel >= activeQuests.length) {
    winGame();
    return;
  }

  const q = activeQuests[currentLevel];
  const bank = questionBanks[q.type];

  if (!bank || currentQuestionIndex >= bank.length) {
    if (isPlayAllMode) {
      currentLevel++;
      currentQuestionIndex = 0;

      if (currentLevel >= activeQuests.length) {
        winGame();
        return;
      }
      loadLevel();
      return;
    } else {
      winGame();
      return;
    }
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
    if (optionsContainer) optionsContainer.classList.remove("options-visible");
    if(inputContainer) {
      inputContainer.classList.add("input-visible");
      const spellingInput = document.getElementById("spelling-input");
      if (spellingInput) {
        spellingInput.value = "";
        spellingInput.focus();
      }
    }
  } else {
    if (inputContainer) inputContainer.classList.remove("input-visible");
    if (optionsContainer) {
      optionsContainer.classList.add("options-visible");
  
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
  Totaltimelimit = seconds;
  updateTimerUI();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 0) {
      clearInterval(timer);
      lives--;
      updateHeartsUI();
      stopSpeech();

      const q = activeQuests[currentLevel];
      const currentQ = questionBanks[q.type][currentQuestionIndex];
      recordMistake(q.type);

      playWrongSound();

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
  const liquidElem = document.getElementById("time-liquid");

  if (timerElem) timerElem.innerText = `${timeLeft}s`;
  if (liquidElem && Totaltimelimit > 0) {
    const percentage = (timeLeft / Totaltimelimit) * 100;

    liquidElem.style.width = percentage + "%";
    liquidElem.classList.remove("liquid-normal", "liquid-warning", "liquid-danger");

    if (percentage > 50) {
      liquidElem.style.backgroundColor = "#2ecc71";
    } else if (percentage > 25) {
      liquidElem.style.backgroundColor = "#f1c40f";
    } else {
      liquidElem.style.backgroundColor = "#e74c3c";
    }
  }
}

function checkSpelling() {
  if (isAnsweringBlocked) return;
  playSound();
  const spellingInput = document.getElementById("spelling-input");
  const userInput = spellingInput ? spellingInput.value.trim() : "";
  checkAnswer(userInput);
}

function checkAnswer(selected) {
  if (isAnsweringBlocked) return;
  isAnsweringBlocked = true;

  stopSpeech();
  clearInterval(timer);

  const q = activeQuests[currentLevel];
  const currentQ = questionBanks[q.type][currentQuestionIndex];

  let isCorrect = false;
  if (q.type === "Capitalization") {
    isCorrect = (selected === currentQ.answer);
  } else {
    isCorrect = (selected.toLowerCase() === currentQ.answer.toLowerCase());
  }


  if (isCorrect) {
    currentQuestionIndex++;
    showNotification("CORRECT! 🎉", () => {
      loadLevel();
    });
  } else {
    lives--;
    updateHeartsUI();
    recordMistake(q.type);

    playWrongSound();

    if (lives <= 0) {
      triggerGameOver("Wrong! " + currentQ.failMsg);
    } else {
      showNotification("Wrong!\n-1 ❤️", () => {
        loadLevel();
      });
    }
  }
}

function triggerGameOver(reason) {
  clearInterval(timer);
  stopSpeech();
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
  stopSpeech();
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

function stopSpeech() {
  if ("speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.log("Speech cancel error ignored");
    }
  }
}

// Voice Function
function mamaSpeaks(textToSay) {
  stopSpeech();

  if ("speechSynthesis" in window) {
    try {
      const utterance = new SpeechSynthesisUtterance(textToSay);
      utterance.lang = "fil-PH";
      utterance.pitch = 1.2;
      utterance.rate = 0.9;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.log("Text-to-speech error:", e);
    }
  }
}

function startBgMusic() {
  if (!bgMusic) {
    try {
      bgMusic = new Audio("sounds/kawai_kitsune.mp3");
      bgMusic.loop = true;
      bgMusic.volume = 1.0;
    
      bgMusic.addEventListener("error", (e) => {
        console.error(
          "Audio loading error detected in kawai_kitsune.mp3:",
          bgMusic.error,
        );
      });
    } catch (e) {
      console.log("Audio initialization failed:", e);
      return;
    }
  }

  if (bgMusic.paused) {
    bgMusic
      .play()
      .then(() => {
        console.log("Background music started playing successfully!");
      })
      .catch((error) => {
        console.log(
          "Background music playback was restricted, waiting for user interaction:",
          error,
        );
      });
  }
}


// Auto-generate menu & listen for Enter key on page load
document.addEventListener("DOMContentLoaded", () => {
  generateMenu();
  startBgMusic();
  
  const unlockAudio = () => {
    startBgMusic();
    if (!bgMusic.paused) {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    }
  };

  window.addEventListener("click", unlockAudio);
  window.addEventListener("keydown", unlockAudio);
  window.addEventListener("touchstart", unlockAudio);

  const nameInput = document.getElementById("name-input");
  if (nameInput) {
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        startGame();
      }
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const activeScreen = document.querySelector(".screen.active");
    if (!activeScreen) return;

    if (activeScreen.id === "screen-menu") {
      resetToStart();
    } else if (
      activeScreen.id === "screen-stats" ||
      activeScreen.id === "screen-game" ||
      activeScreen.id === "screen-gameover" ||
      activeScreen.id === "screen-victory"
    ) {
      resetToMenu();
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  generateMenu();
  startBgMusic();

  const unlockAudio = () => {
    startBgMusic();
    if (!bgMusic.paused) {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    }
  };

  window.addEventListener("click", unlockAudio);
  window.addEventListener("keydown", unlockAudio);
  window.addEventListener("touchstart", unlockAudio);

  const nameInput = document.getElementById("name-input");
  if (nameInput) {
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        startGame();
      }
    });
  }
});