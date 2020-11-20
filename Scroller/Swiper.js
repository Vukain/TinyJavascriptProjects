class Swiper {
    constructor() {
        this.initialY = null;
        this.initialX = null;

        document.addEventListener('touchstart', this.startTouch)
        document.addEventListener('touchmove', this.moveTouch);

        this.events = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch = (event) => {
        // event.preventDefault();

        this.initialY = event.touches[0].clientY;
        this.initialX = event.touches[0].clientX;
        // console.log(this.initialX, this.initialY)
    }

    moveTouch = (event) => {

        if (!this.initialY || !this.initialX) return;

        const currentY = event.touches[0].clientY;
        const currentX = event.touches[0].clientX;

        const diffY = this.initialY - currentY;
        const diffX = this.initialX - currentX;

        // console.log(diffX, diffY)

        if (Math.abs(diffX) > Math.abs(diffY)) {

            if (diffX > 0) {
                document.dispatchEvent(this.events.swipeLeft);
            } else {
                document.dispatchEvent(this.events.swipeRight);
            }

        } else {
            if (diffY > 0) {
                document.dispatchEvent(this.events.swipeUp);
            } else {
                document.dispatchEvent(this.events.swipeDown);
            }
        }

        this.initialX = null;
        this.initialY = null;

    }

}

new Swiper();