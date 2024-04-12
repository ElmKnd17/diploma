const userList = [
    {
        'name': 'Алиса',
        'email': 'example@gmail.com',
        'number': '89777777777',
        'logo': 'https://assets.exclaim.ca/image/upload/v1704045010/weeknd-house-of-balloons-location.jpg',
        'isAccepted': true
    },
    {
        'name': 'Екатерина',
        'email': 'example2@gmail.com',
        'number': '89333333333',
        'logo': 'https://i.redd.it/4pt3e6jk7c321.jpg',
        'isAccepted': true
    },
    {
        'name': 'Анастасия',
        'email': 'example3@gmail.com',
        'number': '89111111111',
        'logo': 'https://assets.capitalxtra.com/2015/23/the-weeknd-house-1433949916-view-0.png',
        'isAccepted': true
    },
    {
        'name': 'Алина',
        'email': 'example4@gmail.com',
        'number': '89272727272',
        'logo': 'https://preview.redd.it/z7gp1wkolep11.jpg?auto=webp&s=9f6a615c143530b5dab17d0bedcd4bda5a70f485',
        'isAccepted': false
    },
    {
        'name': 'Наталья',
        'email': 'example5@gmail.com',
        'number': '89277277277',
        'logo': 'https://64.media.tumblr.com/25736f7c15adef1d8e9931418bae7b62/tumblr_p37dgzZODg1x2n21vo4_1280.png',
        'isAccepted': false
    },
    {
        'name': 'Елена',
        'email': 'exampleX@gmail.com',
        'number': '89171717177',
        'logo': 'https://live.staticflickr.com/65535/51303416171_fd1afa6a84_b.jpg',
        'isAccepted': false
    }
]

const requestList = document.querySelector('.request__list');

const requestItemTemplate = document.querySelector('#request');

userList.forEach(user => {
    requestList.prepend(createRequestItem(requestItemTemplate, user));
})

function createRequestItem(requestItemTemplate, user) {
    const request = requestItemTemplate.content.cloneNode(true);
    const requestItem = request.querySelector('.request__item')
    const requestLogo = request.querySelector('.request__image');
    const requestName = request.querySelector('.request__info--name');
    const requestEmail = request.querySelector('.request__info--email');
    const requestNumber = request.querySelector('.request__info--number');
    const requestButton = request.querySelector('.request__button');

    requestLogo.setAttribute('src', user.logo);
    requestName.textContent = user.name;
    requestEmail.textContent = user.email;
    requestNumber.textContent = user.number;
    if(user.isAccepted) {
        requestButton.remove();
    } else {
        requestItem.classList.add('request__item--not-accepted');
        requestButton.addEventListener('click', evt => {
            evt.target.remove();
            requestItem.classList.remove('request__item--not-accepted');
        });
    }

    return request;
}
