

const inputEmail = document.querySelector('.email');

export function email(){

    const inputWrapper = inputEmail.parentElement;

    inputEmail.addEventListener('blur', () => {
         // Remove error class
        const existeError = document.querySelector('.input__icon--error');
        if( existeError ) existeError.remove();

        // Add event listener to the input field
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if( inputEmail.value.trim() === '' || !isValidEmail(inputEmail.value)){
            const errorMensaje = document.createElement('p');
            errorMensaje.classList.add('input__icon--error','input__icon--message');
            errorMensaje.innerText = 'Looks like this is not an email';
            inputEmail.classList.add('border--error');
            inputEmail.classList.add('email--error')
            inputEmail.placeholder = 'email@example/com'
            inputWrapper.appendChild(errorMensaje);
        } else {
            inputEmail.classList.remove('border--error')
        }

    })

}

