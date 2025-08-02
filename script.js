const myForm = document.getElementById('registration-form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const feedBack = document.getElementById('form-feedback')

myForm.addEventListener('submit',(e) => {
    e.preventDefault();
     let isValid = true;
     let message = [];
     if (nameInput.value.length < 3){
        isValid = false;
        message.push("Username must be at least 3 characters long.");
     }

     if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
        isValid = false;
        message.push('Email must contain "@" and ".". ');
     }
    
     if(passwordInput.value.length <8 ){
        isValid = false;
        message.push("Password must be at least 8 charecters long.");
        feedBack.style.marginTop = '10px'
     }
     if (!isValid) {
        feedBack.innerText = message.join('\n')
     }else{
        feedBack.innerText = "From submitted successfully!"
        feedBack.style.color ='green';
     }
     setTimeout(() => {
        feedBack.textContent = '';
     }, 3000);
});
