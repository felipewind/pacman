import { drawBoard, gridToPixel } from './gameboard.js';

const gameBoardElement = document.getElementById('game-board');
let score = 0;
let pacman = { x: 14, y: 23 };  // Starting position for Pac-Man

// Setup the game
function setupGame() {
    drawBoard(gameBoardElement);
    placePacman();
}

// Place Pac-Man on the board
function placePacman() {
    const pacmanElement = document.createElement('div');
    pacmanElement.id = 'pacman';
    pacmanElement.style.left = `${gridToPixel(pacman.x)}px`;
    pacmanElement.style.top = `${gridToPixel(pacman.y)}px`;
    gameBoardElement.appendChild(pacmanElement);
}

// Pac-Man's movement logic
document.addEventListener('keydown', (event) => {
    let newX = pacman.x;
    let newY = pacman.y;

    switch (event.keyCode) {
        case 37: // left
            newX -= 1;
            break;
        case 38: // up
            newY -= 1;
            break;
        case 39: // right
            newX += 1;
            break;
        case 40: // down
            newY += 1;
            break;
    }

    // Check for wall collision
    // Replace this with actual collision logic
    if (!isWall(newX, newY)) {
        pacman.x = newX;
        pacman.y = newY;
        updatePacmanPosition();
    }
});

// Update Pac-Man's position on the board
function updatePacmanPosition() {
    const pacmanElement = document.getElementById('pacman');
    pacmanElement.style.left = `${gridToPixel(pacman.x)}px`;
    pacmanElement.style.top = `${gridToPixel(pacman.y)}px`;
}

// Placeholder function for wall collision
function isWall(x, y) {
    // Implement wall collision logic
    return false;  // Replace with actual check
}

// Update score
function updateScore(points) {
    score += points;
    document.getElementById('score').innerText = score;
}

// Start the game
setupGame();
