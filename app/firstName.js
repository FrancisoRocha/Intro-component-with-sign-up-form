
const inputName = document.querySelector('.name')

export function firstName(){

    
    inputName.addEventListener('blur', () => {
        const inputWrapper = inputName.parentElement;
        //console.log('Escribiendo')
        // Remove error class
        const existeError = inputWrapper.querySelector('.input__icon--error');
        if( existeError ) existeError.remove();

        if(inputName.value.trim() === ''){
            const errorMensaje = document.createElement('p');
            errorMensaje.classList.add('input__icon--error','input__icon--message');
            errorMensaje.innerText = 'First Name cannot be empty';
            inputName.classList.add('border--error');
            inputName.removeAttribute('placeholder')
            inputWrapper.appendChild(errorMensaje);
        } else {
            console.log(inputName.value)
            inputName.classList.remove('name--error');
        }

    })

}


