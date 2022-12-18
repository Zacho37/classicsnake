import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'

let food = getRandFoodPos()
let power = getRandPowerPos()
let score = 0
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandFoodPos()
        score += 1
        document.getElementById('score').innerText = score
    }
    if (onSnake(power)){
       
        let i = Math.floor(Math.random()*4);
        power = getRandPowerPos()
        if(i = 0){
            score += 10
            document.getElementById('score').innerText = score
        } else if (i = 1){
            score += 2
            document.getElementById('score').innerText = score
        } else if (i = 2){ 
            score += 3
            document.getElementById('score').innerText = score
        } else if (i = 3){
            score += 4
            document.getElementById('score').innerText = score
        } else if (i = 4) {
            score += 5
            document.getElementById('score').innerText = score
        }

    }
}

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
