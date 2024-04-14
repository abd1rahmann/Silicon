var emailInput = document.getElementById('email');
var emailError = document.getElementById('emailError');

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

emailInput.addEventListener('input', function (event) {
    var email = event.target.value;

    if (email.trim() === '') {
        emailError.textContent = '';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Ogiltig e-postadress';
    } else {
        emailError.textContent = '';
    }
});

document.querySelector('.inputs').addEventListener('submit', function (event) {
    var email = emailInput.value;

    if (email.trim() === '') {
        event.preventDefault();
        emailError.textContent = 'Fältet får inte lämnas tomt';
    } else if (!validateEmail(email)) {
        event.preventDefault();
        emailError.textContent = 'Ogiltig e-postadress';
    } else {
        emailError.textContent = '';
    }
}); 
    
    document.getElementById('email').addEventListener('focus', function (event) {
    event.preventDefault();
});








