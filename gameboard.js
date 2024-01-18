// gameboard.js

const GRID_SIZE = 28; // Assuming a 28x28 grid
const CELL_SIZE = 20; // Size of each cell in pixels
const DOT_SIZE = 2;   // Size of dots in pixels

// Game board layout
// 0 - Path, 1 - Wall, 2 - Dot, 3 - Power-Up
const layout = [
    // Define the layout of the maze here using the numbers
    // Top border
    new Array(GRID_SIZE).fill(1),
    // Rows with a path around the perimeter and random dots in the center
    [1, 2, ...new Array(GRID_SIZE - 4).fill(0), 2, 1],
    [1, 2, ...new Array(GRID_SIZE - 4).fill(0), 2, 1],
    // Repeat the path rows to create a simple maze
    ...Array(GRID_SIZE - 6).fill([1, 2, ...new Array(GRID_SIZE - 4).fill(0), 2, 1]),
    // Bottom border
    new Array(GRID_SIZE).fill(1)
].map(row => row.map(cell => cell === 0 ? 2 : cell)); // Convert all paths to dots for simplicity

// Function to render the game board
function drawBoard(gameBoardElement) {
    gameBoardElement.innerHTML = ''; // Clear the game board

    layout.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width = `${CELL_SIZE}px`;
            cellElement.style.height = `${CELL_SIZE}px`;

            switch(cell) {
                case 1:
                    cellElement.classList.add('wall');
                    break;
                case 2:
                    cellElement.classList.add('dot');
                    const dotElement = document.createElement('div');
                    dotElement.classList.add('dot');
                    dotElement.style.width = `${DOT_SIZE}px`;
                    dotElement.style.height = `${DOT_SIZE}px`;
                    cellElement.appendChild(dotElement);
                    break;
                case 3:
                    // You can add power-up rendering logic here
                    break;
                default:
                    cellElement.classList.add('path');
            }

            gameBoardElement.appendChild(cellElement);
        });
    });
}

// Function to convert grid position to pixel position
function gridToPixel(gridPos) {
    return gridPos * CELL_SIZE;
}

export { drawBoard, gridToPixel };
