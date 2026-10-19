// DOM elements
const startButton = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const gameContainer = document.getElementById('game-container');

// click event
startButton.addEventListener('click', startGame);

function startGame() {
    // start menu hide
    startMenu.classList.add('hidden');

    // game container
    gameContainer.classList.remove('hidden');

    // game logic
    runGameLoop();
}

function runGameLoop() {
    console.log("The game loop has officially started!");
    // mechs
}
