document.addEventListener('DOMContentLoaded', function () {

    // SELECCIÓN DE LOS VALORES
    const names = document.querySelector('.name');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const boton = document.querySelector('.btn');
    const formulario = document.querySelector('.formulario');

    names.addEventListener('blur', validar);
    lastName.addEventListener('blur', validar);
    email.addEventListener('blur', validar);
    password.addEventListener('blur', validar);
    boton.addEventListener('click', botonSubmit);

    // Validar input
    function validar(e) {
        const input = e.target;
        if (input.value.trim() === '') {
            mostrarError(input, `${input.placeholder} cannot be empty`);
        } else if (input.classList.contains('email') && !validarEmail(input.value)) {
            mostrarError(input, 'Looks like this is not an email');
        } else {
            eliminarMensaje(input);
        }
    }

    // Limpiar formulario
    function limpiarFormulario() {
        formulario.reset();

        // Eliminar errores visibles
        const errores = document.querySelectorAll('.error');
        errores.forEach(error => error.remove());
    }

    // BOTON
    function botonSubmit(e) {
        e.preventDefault();

        limpiarFormulario();

        const fields = [
            { input: document.querySelector('.name'), mensaje: 'First Name cannot be empty' },
            { input: document.querySelector('.lastName'), mensaje: 'Last Name cannot be empty' },
            { input: document.querySelector('.email'), mensaje: 'Looks like this is not an email' },
            { input: document.querySelector('.password'), mensaje: 'Password cannot be empty' },
        ];

        // VALIDAR CAMPOS

        let isValid = true;

        // Validar todos los campos
        fields.forEach(({ mensaje, input }) => {
            if (input.value.trim() === '') {
                mostrarError(input, mensaje);
                isValid = false;
            } else if (input.classList.contains('email') && !validarEmail(input.value)) {
                mostrarError(input, 'Looks like this is not an email');
                isValid = false;
            } else {
                eliminarMensaje(input);
            }
        });

        // Limpiar el formulario solo si es válido
        if (isValid) {
            formulario.reset();
        }
    }

    // MENSAJE DE ERROR
    function mostrarError(input, mensaje) {
        // Verificar si ya existe un error para este input
        const parentDiv = input.parentElement;
        if (parentDiv.querySelector('.error')) return;
        // CREAR DIV
        const divError = document.createElement('div');
        divError.classList.add('error');

        // CREA LA IMAGEN DE ERROR
        const icono = document.createElement('img');
        icono.src = './images/icon-error.svg';
        icono.classList.add('imgError');

        // TEXTO DE ERROR
        const textoError = document.createElement('p');
        textoError.classList.add('form__error');
        textoError.textContent = mensaje;

        // TEXTO Y IMAGEN EN EL CONTENEDOR
        divError.appendChild(icono);
        divError.appendChild(textoError);

        // Insertar el mensaje de error
        parentDiv.appendChild(divError);
    }

    // ELIMINAR MENSAJE DE ERROR
    function eliminarMensaje(input) {
        const parentDiv = input.parentElement;
        const errorDiv = parentDiv.querySelector('.error');
        if (errorDiv) {
            parentDiv.removeChild(errorDiv);
        }
    }

    // Validar el Email
    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }
});