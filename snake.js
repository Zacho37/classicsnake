import { getInputDirection } from "./input.js"
export let SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11}]
let newSegments = 0

export function update() {
    addSegments();
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0 ; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    switch(document.getElementById('score').textContent){
        case '3':
            SNAKE_SPEED = 8
            break
        case '33':
            SNAKE_SPEED = 10
            break
        case '50':
            SNAKE_SPEED = 12
            break
        case '67':
            SNAKE_SPEED = 14
            break
        case '80':
            SNAKE_SPEED = 12
            break
        case '30':
            SNAKE_SPEED = 10
            break
        case '133':
            SNAKE_SPEED = 14
            break
        case '167':
            SNAKE_SPEED = 12
            break
        case '180':
            SNAKE_SPEED = 8
            break
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}
export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0
}