const bars = () => {
    const tl = new TimelineMax({
        onComplete: bars
    });

    const scale = () => {
        return Math.random() * 3
    }

    const color = () => {
        const colors = ['green', 'red', 'purple'];

        return colors[Math.floor(Math.random() * 3)];
    }

    const barsElement = document.querySelectorAll('#voice-bars rect');
    tl.set(barsElement, {
        y: -30,
        transformOrigin: '50% 50%'
    });
    tl.to(barsElement, .7, {
        scaleY: scale,
        fill: color,
        ease: Bounce.easeIn,
        stagger: {
            repeat: 1,
            yoyo: true,
            each: 0.1,
        }
    })
    return tl;
}

const blink = () => {
    const tl = new TimelineMax({
        repeat: -1,
        repeatDelay: 3,
        delay: 2
    });

    const eyes = document.querySelectorAll('#eye-left, #eye-right');

    tl
        .set(eyes, {
            transformOrigin: '50% 50%'
        })
        .to(eyes, .15, {
            scaleY: 0,
            fill: 'grey',
        })
        .to(eyes, .1, {
            scaleY: 1,
            fill: '#48b3e6',
        })
        .to(eyes, .06, {
            scaleY: 0,
            fill: 'grey',
        }, '+=0.4')
        .to(eyes, .06, {
            scaleY: 1,
            fill: '#48b3e6',
        })
    return tl;
}

const move = (legs) => {
    const tl = new TimelineMax({
        onComplete: () => move(legs)
    });
    tl.to(legs, .6, {
        y: -60,
        stagger: {
            repeat: 1,
            yoyo: true,
            each: 1.2,
            ease: Power0.easeNone
        },
    })
    return tl;
}


const master = new TimelineMax();

master.add('start');
master.add(bars(), 'start');
master.add(blink(), 'start');
master.add(move(document.querySelectorAll('#leg-right, #leg-left')), 'start');