

export function password(validateOnly = false){
    
    const inputPassWord = document.querySelector('.password');
    const inputWrapper = inputPassWord.parentElement;

    // If called for validation only, return boolean result
    if (validateOnly) {
        return inputPassWord.value.trim() !== '';
    }

    inputPassWord.addEventListener('blur', () => {
        const existeError = inputWrapper.querySelector('.input__icon--message');

        inputPassWord.classList.add('border--error');
        inputPassWord.removeAttribute('placeholder');

        if(inputPassWord.value.trim() === ''){
            if(!existeError){
                const errorMensaje = document.createElement('p');
                errorMensaje.classList.add('input__icon--message');
                errorMensaje.innerText = 'Password cannot be empty';
                inputWrapper.appendChild(errorMensaje);
            }
        } else {
            inputPassWord.classList.remove('border--error');
            if(existeError) existeError.remove();
        }
    })

}


