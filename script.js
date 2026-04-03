var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Campo Obrigatório';
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Escreva o seu Nome Completo';
        return false
    }
    nameError.innerHTML = 'Válido';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Campo Obrigatório';
        return false;
    }
    if(phone.length !== 9) {
        phoneError.innerHTML = 'O contacto deve ter 9 digitos';
        return false;
    }
    if(!phone.match(/^[0-9]{9}$/)) {
        phoneError.innerHTML = 'Apenas Digitos';
        return false;
    }
    phoneError.innerHTML = 'Válido';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    
    if(email.length == 0) {
        emailError.innerHTML = 'Campo Obrigatório';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Inválido';
        return false;
    }
    emailError.innerHTML = 'Válido';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 25;
    var left = required - message.length;
    
    if(left > 0) {
        messageError.innerHTML = 'Mensagem muito curta';
        return false;
    }
    messageError.innerHTML = 'Válido';
    return true;

}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || validateMessage()) {
    submitError.style.display = 'block';    
    submitError.innerHTML = 'Por favor, preencha todos os campos';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false
    }
}