const scroller = new Scroller('#root');

document.addEventListener('wheel', scroller.listenScroll);

document.addEventListener('swipeUp', () => scroller.scroll(1));
document.addEventListener('swipeDown', () => scroller.scroll(-1));

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            return scroller.scroll(-1)
        case 'ArrowDown':
            return scroller.scroll(1)
        default:
            return;
    }

});