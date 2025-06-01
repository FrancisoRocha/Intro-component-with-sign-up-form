

export function firstName(){
    const inputName = document.querySelector('.name')
    const inputWrapper = inputName.parentElement;

    inputName.addEventListener('blur', () => {
        const existingError = inputWrapper.querySelector('.input__icon--message');
        //console.log('Escribiendo')

        if(inputName.value.trim() === ''){

            inputName.classList.add('border--error');
            inputName.removeAttribute('placeholder');

            if(!existingError){
                const errorMensaje = document.createElement('p');
                errorMensaje.classList.add('input__icon--message');
                errorMensaje.innerText = 'First Name cannot be empty';
                inputWrapper.appendChild(errorMensaje);
            }
        } else {
            //console.log(inputName.value)
            inputName.classList.remove('border--error');
            if(existingError) existingError.remove()
        }

    })

}


