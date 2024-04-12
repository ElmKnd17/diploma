const openButton = document.querySelector('.profile__button');
const nameValue = document.querySelector('.profile__name');
// const logo = document.querySelector('.profile__image');
const email = document.querySelector('.profile__email');
const login = document.querySelector('.profile__login');

const modal = document.querySelector('.popup');
const closeButton = modal.querySelector('.popup_close-button');
const form = modal.querySelector('.popup__form');
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const loginInput = form.elements.login;
const submitButton = form.querySelector('.popup__form__button');

function openModal(modal) {
    modal.classList.add('popup_is-opened');
    closeButton.addEventListener('click', closeButtonHandler)
    modal.addEventListener('click', closeByOverlayHandler);
    document.addEventListener('keydown', closeByEscapeHandler);
    form.addEventListener('submit', submitButtonHandler)
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    closeButton.removeEventListener('click', closeButtonHandler);
    modal.removeEventListener('click', closeByOverlayHandler);
    document.removeEventListener('keydown', closeByEscapeHandler);
    form.removeEventListener('submit', submitButtonHandler)
}

function closeButtonHandler() {
    closeModal(modal);
}

function closeByOverlayHandler(evt) {
    if(evt.target === evt.currentTarget) {
        closeModal(evt.currentTarget);
    }
}

function closeByEscapeHandler(evt) {
    if(evt.key === 'Escape') {
        const modal = document.querySelector('.popup_is-opened');
        closeModal(modal);
    }
}

function submitButtonHandler(evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    login.textContent = loginInput.value;
    email.textContent = emailInput.value;
    closeModal(modal);
}

function openButtonHandler() {
    nameInput.value = nameValue.textContent;
    loginInput.value = login.textContent;
    emailInput.value = email.textContent;
    openModal(modal);
}

openButton.addEventListener('click', openButtonHandler);