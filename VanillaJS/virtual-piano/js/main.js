
/*function keyer (el) {
    el.addEventListener('click', (e) => {
        console.log(`The '${el.textContent}' key is pressed.`);
    })
}

const keys = document.querySelectorAll('kbd');

keys.forEach(key => keyer(key))
*/

const keyCodes = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU']
const keys = document.querySelectorAll('kbd')

function keyPresser(event) {
    if (keyCodes.includes(event.code)) {
        console.log(`The '${event.key}' key is pressed.`);
        keys.forEach(keyor => {
            if (event.key.toUpperCase() == keyor.textContent) {
                keyor.className = 'active';
            }
        })
        let audio = new Audio(`media/${event.key.toUpperCase()}.mp3`);
        audio.play()
    } else {
        console.log('Wrong button')
    }
}

function keyReleaser(event) {
    if (keyCodes.includes(event.code)) {
        console.log(`The '${event.key}' key is unpressed.`);
        keys.forEach(keyor => {
            if (event.key.toUpperCase() == keyor.textContent) {
                keyor.className = '';
            }
        })
}}

document.addEventListener('keydown', event => keyPresser(event));

document.addEventListener('keyup', event => keyReleaser(event));
