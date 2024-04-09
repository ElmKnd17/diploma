// function setSmallBar() {
//     const headerBar = document.querySelector('.header__bar');
//     const smallBarTemplate = document.querySelector('#small-bar-template').content.cloneNode(true);
//     headerBar.replaceWith(smallBarTemplate);
// }

// function setBigBar() {
//     const headerBar = document.querySelector('.header__bar');
//     const bigBarTemplate = document.querySelector('#big-bar-template').content.cloneNode(true);
//     headerBar.replaceWith(bigBarTemplate);
// }

// if (window.innerWidth < 769) {
//     setSmallBar();
// } else {
//     setBigBar();
// }

// window.addEventListener('resize', (evt) => {
//     if (evt.target.innerWidth < 769) {
//         setSmallBar();
//     } else {
//         setBigBar();
//     }
// })

const headerBar = document.querySelector('.header__bar');
const menuButton = document.querySelector('.header__bar-button');
const menuTitle = document.querySelector('.header__bar-title');

menuButton.addEventListener('click', () => {
    headerBar.classList.toggle('opened-menu');
    menuButton.classList.toggle('is-open');
})

menuTitle.addEventListener('click', () => {
    headerBar.classList.toggle('opened-menu');
    menuButton.classList.toggle('is-open');
})