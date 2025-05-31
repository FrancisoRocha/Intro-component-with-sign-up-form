
const inputPassWord = document.querySelector('.password');

export function password(){

    const inputWrapper = inputPassWord.parentElement;

    inputPassWord.addEventListener('blur', () => {
        // Remove error class
        const existeError = document.querySelector('.input__icon--error');
        if( existeError ) existeError.remove();

        if(inputPassWord.value.trim() === ''){
            const errorMensaje = document.createElement('p');
            errorMensaje.classList.add('input__icon--error','input__icon--message');
            errorMensaje.innerText = 'Password cannot be empty';
            inputPassWord.classList.add('border--error');
            inputPassWord .removeAttribute('placeholder');
            inputWrapper.appendChild(errorMensaje);
        } else {
            inputPassWord.classList.remove('border--error');
        }
    })

}


