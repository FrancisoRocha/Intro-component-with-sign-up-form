
// Email validation helper function
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function email(validateOnly = false){
    
    const inputEmail = document.querySelector('.email');
    const inputWrapper = inputEmail.parentElement;


    // If called for validation only, return boolean result
    if (validateOnly) {
        return inputEmail.value.trim() !== '' && isValidEmail(inputEmail.value);
    }
    
    inputEmail.addEventListener('blur', () => {
        const existeError = inputWrapper.querySelector('.input__icon--message');

        if( inputEmail.value.trim() === '' || !isValidEmail(inputEmail.value)){

            inputEmail.classList.add('border--error');
            inputEmail.classList.add('email--error');
            inputEmail.placeholder = 'email@example/com';

            if(!existeError){
                const errorMensaje = document.createElement('p');
                errorMensaje.classList.add('input__icon--message');
                errorMensaje.innerText = 'Looks like this is not an email';
                inputWrapper.appendChild(errorMensaje);
            }
        } else {
            inputEmail.classList.remove('border--error');
            if(existeError) existeError.remove();
        }

    })

}

