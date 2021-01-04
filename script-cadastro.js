//Select form and inputs

const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//FUNÇÕES

//Show error (red border)
function showError(input, message) {
    //select input parent element (form-item)
    const formItem = input.parentElement;
    //add the class "erro" on the ipt parent element (form-item)
    formItem.className = 'form-item erro';
    //select small tag
    const small = formItem.querySelector('small');
    small.innerText = message;
}

//Show success (green border)
function showSuccess(input) {
    const formItem = input.parentElement;
    formItem.className = 'form-item sucesso';
}

//check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, 'E-mail inválido');
    }
}

//Pick the first letter of input IDs and uppercase them. Rest of the letters remain lowercase
function pickFirstLetterIpt(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

//Check required inputs
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${pickFirstLetterIpt(input)} é necessário(a)`);
        }
        else {
            showSuccess(input);
        }
    });
}

//check inputs length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, 
            `${(pickFirstLetterIpt(input))} deve ter no mínimo ${min} caracteres`
        );
    }
    else if (input.value.length > max) {
        showError(input, 
            `${(pickFirstLetterIpt(input))} deve ter menos do que ${max} caracteres`
        );
    }
    else {
        showSuccess(input);
    }
}

//Check if passwords match
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Senhas devem ser iguais');
    }
}

//EVENT LISTENER

form.addEventListener('submit', function(e) {
    e.preventDefault();
    //push inputs an an array to avoid repetition
    checkRequired([user, email, password, passwordConfirm]);
    checkLength(user, 4, 12);
    checkLength(password, 5, 15);
    checkEmail(email);
    passwordMatch(password, passwordConfirm);
});