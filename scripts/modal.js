function closeButtonHandler(evt) {
    const modal = evt.target.closest('.popup_is-opened');
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

function openModal(modal) {
    const closeButton = modal.querySelector('.popup_close-button');
    modal.classList.add('popup_is-opened');
    closeButton.addEventListener('click', closeButtonHandler);
    modal.addEventListener('click', closeByOverlayHandler);
    document.addEventListener('keydown', closeByEscapeHandler);
}

function closeModal(modal) {
    const closeButton = modal.querySelector('.popup_close-button');
    modal.classList.remove('popup_is-opened');
    closeButton.removeEventListener('click', closeButtonHandler);
    modal.removeEventListener('click', closeByOverlayHandler);
    document.removeEventListener('keydown', closeByEscapeHandler);
}

function openButtonHandler(evt) {
    const master = evt.target.closest('.main__masters-item');
    const image = master.querySelector('.main__master-image');
    const masterName = master.querySelector('.main__masters-item__name');
    const post =  master.querySelector('.main__masters-item__post');
    const experience = master.querySelector('.main__masters-item__experience');
    const specialization = master.querySelector('.main__masters-item__specialization');
    const hobby = master.querySelector('.main__masters-item__hobby');

    modalImage.src = image.getAttribute('src');
    modalName.textContent = masterName.textContent;
    modalPost.textContent = post.textContent;
    modalExperience.textContent = experience.textContent;
    modalSpecialization.textContent = specialization.textContent;
    modalHobby.textContent = hobby.textContent;
        
    openModal(mastersModal);
}

const mastersModal = document.querySelector('.popup-type-master');
const modalImage = mastersModal.querySelector('.popup__master-image');
const modalName = mastersModal.querySelector('.popup__name');
const modalPost =  mastersModal.querySelector('.popup__post');
const modalExperience = mastersModal.querySelector('.popup__experience');
const modalSpecialization = mastersModal.querySelector('.popup__specialization');
const modalHobby = mastersModal.querySelector('.popup__hobby');

const buttonModalOpeners = document.querySelectorAll('.main__masters-button-details');
const imageModalOpeners = document.querySelectorAll('.main__master-image');

buttonModalOpeners.forEach( value => {
    value.addEventListener('click', openButtonHandler);
});

imageModalOpeners.forEach( value => {
    value.addEventListener('click', openButtonHandler);
})