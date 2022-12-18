import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'
let food = getRandFoodPos()
let power = getRandPowerPos()
let score = 0
const EXPANSION_RATE = 1
let randomTal
export let her


export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandFoodPos()
        score += 1
        document.getElementById('score').innerText = score
    }
    if (onSnake(power)){
       

        power = getRandPowerPos()
        randomTal = Math.floor(Math.random()*5)

        if(randomTal == 0) {
            let her = (false)
        } else if (randomTal == 1) {
            score += 2
            document.getElementById('score').innerText = score
        } else if (randomTal == 2) { 
            score += 3
            document.getElementById('score').innerText = score
        } else if (randomTal == 3) {
            score += 4
            document.getElementById('score').innerText = score
        } else if (randomTal == 4) {
            score += 5
            document.getElementById('score').innerText = score
        }

    }
}
export {randomTal}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

    const powerElement = document.createElement('dive')
    powerElement.style.gridRowStart = power.y
    powerElement.style.gridColumnStart = power.x
    powerElement.classList.add('power')
    gameBoard.appendChild(powerElement) 
}

function getRandFoodPos() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition()

    }
    return newFoodPos
}

function getRandPowerPos() {
    let newPowerPos
    while (newPowerPos == null || onSnake(newPowerPos)) {
        newPowerPos = randomGridPosition()

    }
    return newPowerPos
}
