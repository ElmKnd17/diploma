const scrollButton = document.querySelector('.main_link');

window.addEventListener('scroll', () => {
    const windowInnerHeight = Math.round(window.innerHeight);
    const scrollPosition = Math.round(window.scrollY);
    if(windowInnerHeight < scrollPosition) {
        scrollButton.classList.add('main-link_is-opened');
    }
    if(windowInnerHeight >= scrollPosition) {
        scrollButton.classList.remove('main-link_is-opened');
    }
})