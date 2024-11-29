const snakeElement = document.getElementById('snake');
const foodElement = document.getElementById('food');

let snake = [{ x: 10, y: 10 }];
let food = getRandomFoodPosition();
let direction = { x: 0, y: 0 };
const gridSize = 20;

function update() {
    updateSnake();
    checkCollision();
    checkFoodCollision();
    render();
}

function updateSnake() {
    const head = { ...snake[0] };
    snake.unshift({
        x: head.x + direction.x,
        y: head.y + direction.y
    });
}

function checkCollision() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= gridSize ||
        head.y < 0 || head.y >= gridSize ||
        isSnakeCollision()
    ) {
        resetGame();
    }
}

function isSnakeCollision() {
    const head = snake[0];
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function checkFoodCollision() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        snake.push({});
        food = getRandomFoodPosition();
    }
}

function render() {
    renderSnake();
    renderFood();
}

function renderSnake() {
    snake.forEach((segment, index) => {
        const segmentElement = index === 0 ? snakeElement : createSegmentElement();
        segmentElement.style.left = `${segment.x * gridSize}px`;
        segmentElement.style.top = `${segment.y * gridSize}px`;
    });
}

function createSegmentElement() {
    const segmentElement = document.createElement('div');
    segmentElement.className = 'snake';
    document.querySelector('.game-container').appendChild(segmentElement);
    return segmentElement;
}

function renderFood() {
    foodElement.style.left = `${food.x * gridSize}px`;
    foodElement.style.top = `${food.y * gridSize}px`;
}

function getRandomFoodPosition() {
    return {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
    };
}

function resetGame() {
    alert('Game Over! Press OK to restart.');
    snake = [{ x: 10, y: 10 }];
    food = getRandomFoodPosition();
    direction = { x: 0, y: 0 };
    render();
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            direction = { x: 1, y: 0 };
            break;
    }
});

function gameLoop() {
    update();
    setTimeout(gameLoop, 150);
}

gameLoop();
