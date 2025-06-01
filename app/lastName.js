

export function lastName() {
    
    const inputLastName = document.querySelector('.last__name');
    const inputWrapper = inputLastName.parentElement;

    inputLastName.addEventListener('blur', () => {
        const existeError = inputWrapper.querySelector('.input__icon--message');

        if( inputLastName.value.trim() === ''){

            inputLastName.classList.add('border--error');
            inputLastName.removeAttribute('placeholder');

            if(!existeError){
                const errorMensaje = document.createElement('p');
                errorMensaje.classList.add('input__icon--error','input__icon--message');
                errorMensaje.innerText = 'Last Name cannot be empty';
                inputWrapper.appendChild(errorMensaje);
            }
        } else {
            inputLastName.classList.remove('border--error')
            if(existeError) existeError.remove()
        }
    })
}

