import {update as updateSnake, draw as drawSnake,
     SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

let renderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver) {
        if(confirm('You lost!   Your Score: ' + document.getElementById('score').textContent + '\nPress OK to restart')){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secSincePrevRender = (currentTime - renderTime) / 1000
    if(secSincePrevRender < 1 / SNAKE_SPEED) return
    renderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}