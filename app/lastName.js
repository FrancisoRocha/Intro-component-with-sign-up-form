
const inputLastName = document.querySelector('.last__name');

export function lastName() {

    const inputWrapper = inputLastName.parentElement;

    inputLastName.addEventListener('blur', () => {

        // Remove error class
        const existeError = document.querySelector('.input__icon--error');
        if( existeError ) existeError.remove();

        if( inputLastName.value.trim() === ''){
            const errorMensaje = document.createElement('p');
            errorMensaje.classList.add('input__icon--error','input__icon--message');
            errorMensaje.innerText = 'Last Name cannot be empty';
            inputLastName.classList.add('border--error');
            inputLastName.removeAttribute('placeholder');
            inputWrapper.appendChild(errorMensaje);
        } else {
            inputLastName.classList.remove('border--error')
        }


    })

}

