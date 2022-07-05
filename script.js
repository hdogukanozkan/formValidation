const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


form.addEventListener('submit', tikladim);




function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function succses(input) {
    input.className = 'form-control is-valid';
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkRequest(inputs) {
    inputs.forEach(function (e) {
        if (e.value === '') {
            error(e, `${e.id} is required`);
        } else {
            succses(e)
        }
    });
}

function checkEmail(email) {
    if (email.input === '') {
        error(email, `${e.id} is required`);
    }
    else if (!validateEmail(email.value)) {
        error(email, 'lütfen geçerli bir email adresi giriniz.')
    }
    else {
        succses(email)
    }
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`)
    } else {
        succses(input)
    }
}

function validPassword(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'parolalar eşleşmiyor')
    }

}

function phoneValid(input) {
    var phoneno = /^\d{10}$/;
    if (input.value.match(phoneno)) {
        succses(input)
    }
    else {
        error(input, 'lütfen 10 haneli bir numara giriniz')
    }
}

function tikladim(e) {
    e.preventDefault();
    checkRequest([username, password, repassword, phone]);
    checkEmail(email)
    checkLenght(username, 7, 15);
    checkLenght(password, 7, 25);
    validPassword(password, repassword)
    phoneValid(phone)
}

