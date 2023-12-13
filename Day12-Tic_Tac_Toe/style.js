const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');
const winnerMessage = document.getElementById('winnerMessage');
let currentPlayer = 'x';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    const cells = document.querySelectorAll('.game-cell');
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameActive = false;
            return cells[a].textContent;
        }
    }
    return null;
}

function handleCellClick(event) {
    const cell = event.target;
    if (cell.classList.contains('x') || cell.classList.contains('o') || !gameActive) {
        return;
    }
    cell.classList.add(currentPlayer);
    cell.textContent = currentPlayer.toUpperCase();
    const winner = checkWin();
    if (winner) {
        winnerMessage.textContent = `Player ${winner} wins!`;
        winnerMessage.style.display = 'block';
    } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
}

function resetGame() {
    document.querySelectorAll('.game-cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    winnerMessage.style.display = 'none';
    currentPlayer = 'x';
    gameActive = true;
}

// Initialize the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('game-cell');
    cell.addEventListener('click', handleCellClick);
    gameBoard.appendChild(cell);
}

resetButton.addEventListener('click', resetGame);
