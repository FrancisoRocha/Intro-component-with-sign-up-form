import { email } from "./email.js";
import { firstName } from "./firstName.js";
import { lastName } from "./lastName.js";
import { password } from "./password.js";

const form = document.querySelector('.form');

export function buttonSubmit() {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Limpiar estilos y mensajes de error
        document.querySelectorAll('.input__icon--message').forEach(el => el.remove());
        document.querySelectorAll('.border--error').forEach(input => input.classList.remove('border--error'));
        document.querySelectorAll('.email--error').forEach(input => input.classList.remove('email--error'));

        const nameValid = firstName();
        const lastNameValid = lastName();
        const emailValid = email();
        const passValid = password();

        const isValid = nameValid && lastNameValid && emailValid && passValid;

        if (!isValid) {

            // Arreglo de campos con sus valores de validez
            const fields = [
                { valid: nameValid, element: document.querySelector('.name') },
                { valid: lastNameValid, element: document.querySelector('.last__name') },
                { valid: emailValid, element: document.querySelector('.email') },
                { valid: passValid, element: document.querySelector('.password') }
            ];

            // Genera errores dinámicos
            fields.forEach(({ valid, element }) => {
                if (!valid) {
                    const inputWrapper = element.parentElement;
                    const fieldName = element.getAttribute('name') || 'This field';
                    const errorMensaje = document.createElement('p');
                    errorMensaje.classList.add('input__icon--message');
                    errorMensaje.innerText = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot be empty`;
                    inputWrapper.appendChild(errorMensaje);
                    element.classList.add('border--error');

                    if (element.name !== 'email') {
                        element.placeholder = '';
                    } else {
                        element.classList.add('email--error');
                        element.placeholder = 'email@example/com';
                    }
                }
            });
        } else {
            console.log('Formulario válido. Enviar datos...');
            form.reset();

            document.querySelector('.name').placeholder = 'First Name';
            document.querySelector('.last__name').placeholder = 'Last Name';
            document.querySelector('.email').placeholder = 'Email Address';
            document.querySelector('.password').placeholder = 'Password';
        }
    })
}

