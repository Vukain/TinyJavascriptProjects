const box = document.querySelector('.typing');
const text = ["Wowow^Powiadasz, że mamy rok 2020?^Powodzenia!!!",
  "Stosunek do życia?^Śmierć śmiertelnikom!",
  "Your clothes, give them to me...^Now!!!^I'll be back... later."
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100;

let activeDOMElement = box;

const typing = (newTime) => {

  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);


    if (wordIndex === text[textIndex].length) {
      return setTimeout(() => {
        box.textContent = "";
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing)

        if (textIndex == text.length) {
          textIndex = 0;
        }

      }, 2000);
    } else if (wordIndex === 0 || letter == "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    oldTime = newTime;
    if (letter !== '^') {
      activeDOMElement.textContent += letter;
    }
    wordIndex++;
  }

  requestAnimationFrame(typing)
}

typing()