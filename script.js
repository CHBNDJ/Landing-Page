const mail = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const btnStarted = document.getElementById('btnStarted');
const input = document.querySelector('.access-subscription input');
const errorMail = document.querySelector('.error-mail');
const signUp = document.getElementById('signUp');



btnStarted.addEventListener('click', () => {
     if (!mail.value.match(emailRegex)) {
        errorMail.textContent = 'Error, please check your email';
        errorMail.classList.add('show');
    } else {
        errorMail.textContent = '';
        errorMail.classList.remove('show');
        location.reload();
    }

    
    
    
    mail.addEventListener('click', () => {
        errorMail.textContent = '';
        errorMail.classList.remove('show');
    })
    

})


