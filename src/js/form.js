let form = document.querySelector('.form')
let formFields = document.querySelectorAll('.field')
let name = document.querySelector('#name');
let adress = document.querySelector('#adress');
let phone = document.querySelector('#phone');
let btn = document.querySelector('#btn');
let body = document.querySelector('body');

let close = document.createElement('div');
let wrapper = document.createElement('div');
let alert = document.createElement('div');

let valid  = true;

function removeValidation() {
    let errors = form.querySelectorAll('.error');

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    valid = true;
}

function isEmptyField() {
    for (let i = 0; i < formFields.length; i++) {
        if ( !formFields[i].value ) {
            let error = document.createElement('p');
            error.className = 'error';
            error.innerHTML = `Заполните все поля `;
            form.appendChild(error);

            valid = false;

            return;
        }
    }
}

function isPhoneNumberValid() {
    if ( phone.value && +phone.value.length < 7 ) {
        let error = document.createElement('p');
        error.className = 'error';
        error.innerHTML = ` Номер должен содержать не менее 7 символов`;
        form.appendChild(error);

        valid = false;

        return;
    }
}

async function createOrder() {
    await fetch('http://localhost:9009/order', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            phone: phone.value,
            adress: adress.value
        }),
    });

    alert.innerText = 'Cпaсибо за заказ';
    alert.className = ('alert');

    close.className = ('close');
    close.innerText = '✖';

    wrapper.className = ('dark-backround');

    body.appendChild(wrapper);
    wrapper.appendChild(alert);
    alert.appendChild(close);
}

close.addEventListener('click', () => {
    body.removeChild(wrapper);
})

formFields.forEach( i => i.addEventListener('input', () => {
    let inputValue = i.value.replace('.', '');
    i.value = inputValue;
}));

form.addEventListener('submit', () => {
    event.preventDefault();
    removeValidation();
    isEmptyField();
    isPhoneNumberValid();

    if (valid) {
        createOrder();
    }
})
