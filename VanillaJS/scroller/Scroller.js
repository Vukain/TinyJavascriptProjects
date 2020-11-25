class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('section');
        const sectionsArr = [...this.sections];

        const currentSectionIndex = sectionsArr.findIndex(element => this.isScrolledIntoView(element));
        this.currentSectionIndex = currentSectionIndex > 0 ? currentSectionIndex : 0;
        this.isThrottled = false;

        this.drawNavigation();
        this.selectActivNavItem();
    }

    isScrolledIntoView = (el) => {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        const isVisible = (elemTop >= 0) && (elemBottom <= Math.floor(window.innerHeight));

        return isVisible;
    }

    scrollToCurrentSection = () => {
        this.selectActivNavItem();
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    scroll = (direction) => {
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSection = this.currentSectionIndex === 0;
            if (isFirstSection) return;
        }

        this.currentSectionIndex = this.currentSectionIndex + direction;

        this.scrollToCurrentSection();
    }

    listenScroll = (event) => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false;
        }, 1000);

        const direction = event.deltaY > 0 ? 1 : -1;

        this.scroll(direction);
    }

    drawNavigation = () => {
        this.navigationContainer = document.createElement('aside');
        this.navigationContainer.setAttribute('class', 'scroller__navigation');
        const list = document.createElement('ul');

        this.sections.forEach((section, index) => {
            const listItem = document.createElement('li');
            listItem.addEventListener('click', () => {
                this.currentSectionIndex = index;
                this.scrollToCurrentSection();
            })
            list.appendChild(listItem);
        })

        this.navigationContainer.appendChild(list);
        document.body.appendChild(this.navigationContainer);
    }

    selectActivNavItem = () => {
        if (this.navigationContainer) {
            const navigationItems = this.navigationContainer.querySelectorAll('li');

            navigationItems.forEach((item, index) => {
                if (index == this.currentSectionIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }

    }
}