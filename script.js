let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('password_confirmation');
let errorText = document.querySelector('#error_txt');

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);

function checkPasswords() {
    if (passwordInput.value === confirmPasswordInput.value) {
        errorText.textContent = ''; 
        passwordInput.style.border = '2px solid green';
        confirmPasswordInput.style.border = '2px solid green';
    } else {
        errorText.textContent = '*Passwords do not match';
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
    }
}

