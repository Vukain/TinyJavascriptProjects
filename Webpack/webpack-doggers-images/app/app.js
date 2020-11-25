import '../sass/style.scss';

class Doggo {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('img');
        this.backggroundEl = document.querySelector('.featured-dog__background');
        this.tilesEl = document.querySelector('.tiles');
        this.spinnerEl = document.querySelector('.spinner');

        this.init();
    }

    showLoading() {
        this.spinnerEl.classList.add('spinner--visible');
    }

    hideLoading() {
        this.spinnerEl.classList.remove('spinner--visible');
    }


    listBreeds() {
        return fetch(`${this.apiUrl}/breeds/list/all`)
            .then(resp => resp.json())
            .then(data => {
                return data.message;
            })
    }

    getRandomImage() {
        return fetch(`${this.apiUrl}/breeds/image/random`)
            .then(resp => resp.json())
            .then(data => {
                return data.message;
            })
    }

    getRandomImageByBreed(breed) {
        return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
            .then(resp => resp.json())
            .then(data => {
                return data.message;
            })
    }
    rendoDoggo(src) {
        this.imgEl.setAttribute('src', src);
        this.backggroundEl.style.background = `url("${src}")`;
        setTimeout(() => this.hideLoading(), 1000);
    }

    init() {
        this.showLoading();
        this.getRandomImage()
            .then(src => this.rendoDoggo(src));

        this.showAllBreeds()
    }

    addBreed(breed, subBreed) {
        let name;
        let type;

        if (typeof subBreed == 'undefined') {
            name = breed;
            type = breed;
        } else {
            name = `${breed} ${subBreed}`
            type = `${breed}/${subBreed}`
        }

        const tile = document.createElement('div');
        tile.classList.add('tiles__tile');

        const tileContent = document.createElement('div');
        tileContent.classList.add('tiles__tile-content');

        tileContent.innerText = name;
        tileContent.addEventListener('click', () => {
            window.scrollTo(0, 0);
            this.showLoading()
            this.getRandomImageByBreed(type)
                .then(src => this.rendoDoggo(src))
        })
        console.log(tile, tileContent)
        tile.appendChild(tileContent);
        this.tilesEl.appendChild(tile);
    }

    showAllBreeds() {
        this.listBreeds()
            .then(breeds => {
                for (const breed in breeds) {
                    if (breeds[breed].length === 0) {
                        this.addBreed(breed);
                    } else {
                        for (const subBreed of breeds[breed]) {
                            this.addBreed(breed, subBreed);
                        }
                    }
                }
            })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Doggo();
})