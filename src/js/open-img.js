let images = document.querySelectorAll('.pizza-wrapper img');
let body = document.querySelector('body');

let wrapper = document.createElement('div');
let img = document.createElement('img');
let close = document.createElement('div');

images.forEach( image => {
    image.addEventListener('click', () => {
        let alert = document.createElement('div');
        img.src = image.src;

        wrapper.className = ('dark-backround');
        alert.className = ('alert-white');
        img.className = ('full-size');
        close.className = ('close');
        close.innerText = '✖';

        body.appendChild(wrapper);
        wrapper.appendChild(alert);
        alert.appendChild(close);
        alert.appendChild(img);
    })
})

close.addEventListener('click', () => {
    body.removeChild(wrapper);
})
