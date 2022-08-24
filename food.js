import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'

let food = getRandFoodPos()
let score = 0
const EXPANSION_RATE = 3

export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandFoodPos()
        score += 10
        document.getElementById('score').innerText = score
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandFoodPos() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition()
    }
    return newFoodPos
}
