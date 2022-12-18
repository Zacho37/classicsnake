// den her ødelægger det hele
// import {her} from './food.js'


let inputDirection = { x:0, y:0 }
let lastInput = { x:0, y:0 }
window.addEventListener('keydown', e => {
  let her = (true)
if ( her == true) {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInput.y !== 0) break
            inputDirection = { x:0, y:-1 }
            break
        case 'ArrowDown':
            if (lastInput.y !== 0) break
            inputDirection = { x:0, y:1 }
            break
        case 'ArrowLeft':
            if (lastInput.x !== 0) break
            inputDirection = { x:-1, y:0 }
            break
        case 'ArrowRight':
            if (lastInput.x !== 0) break
            inputDirection = { x:1, y:0 }
            break
        }
    } else if (her == false){
    switch (e.key) {
        case 'ArrowUp':
            if (lastInput.y !== 0) break
            inputDirection = { x:0, y:1 }
            break
        case 'ArrowDown':
            if (lastInput.y !== 0) break
            inputDirection = { x:0, y:-1 }
            break
        case 'ArrowLeft':
            if (lastInput.x !== 0) break
            inputDirection = { x:1, y:0 }
            break
        case 'ArrowRight':
            if (lastInput.x !== 0) break
            inputDirection = { x:-1, y:0 }
            break
    } 
}
}
)

export function getInputDirection() {
    lastInput = inputDirection
    return inputDirection
}