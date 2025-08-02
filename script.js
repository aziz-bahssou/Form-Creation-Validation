document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('registration-form');
    const nameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const feedBack = document.getElementById('form-feedback');

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        let message = [];

        // Username validation
        if (nameInput.value.length < 3) {
            isValid = false;
            message.push("Username must be at least 3 characters long.");
        }

        // Email validation (regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            message.push('Please enter a valid email address.');
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            isValid = false;
            message.push("Password must be at least 8 characters long.");
        }

        feedBack.style.display = 'block';

        if (!isValid) {
            feedBack.innerHTML = message.join('<br>');
            feedBack.style.color = '#dc3545';
        } else {
            feedBack.textContent = "Registration successful!";
            feedBack.style.color = '#28a745';
        }

        setTimeout(() => {
            feedBack.textContent = '';
            feedBack.style.display = 'none';
        }, 3000);
    });
});
