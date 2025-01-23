document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector(".name");
  const inputLastName = document.querySelector(".lastName");
  const inputEmail = document.querySelector(".email");
  const inputPassword = document.querySelector(".password");
  const formulario = document.querySelector(".formulario");

  inputName.addEventListener("blur", validarformulario);
  inputLastName.addEventListener("blur", validarformulario);
  inputEmail.addEventListener("blur", validarformulario);
  inputPassword.addEventListener("blur", validarformulario);
  formulario.addEventListener("submit", btnEnviar);

  //Si el campo está vacío
  function validarformulario(e) {
    const inputs = e.target;
    borrarMensajeError(inputs);
    let mensaje;
    if (inputs.value.trim() === "") {
      if (inputs.classList.contains("name")) {
        mensaje = "First Name cannot be empty";
        inputs.setAttribute("placeholder", "");
      } else if (inputs.classList.contains("lastName")) {
        mensaje = "Last Name cannot be empty";
        inputs.setAttribute("placeholder", "");
      } else if (inputs.classList.contains("password")) {
        mensaje = "Password cannot be empty";
        inputs.setAttribute("placeholder", "");
      } else if (inputs.classList.contains("email")) {
        mensaje = "Email cannot be empty";
        inputs.setAttribute("placeholder", "email@example/com");
      }
      inputs.classList.add("warning");
      mensajeError(inputs, mensaje);
      return;
    }

    // Muestra mensaje de error si es un email invalido
    if (inputs.classList.contains("email")) {
      if (!validarEmail(inputs.value)) {
        mensaje = "Looks like this is not an email";
        inputs.setAttribute("placeholder", "email@example/com");
        inputs.classList.add("warning");
        mensajeError(inputs, mensaje);
        return;
      }
    }

    // Muestra mensaje de error si es un password invalido
    if (inputs.classList.contains("password")) {
      if (!validarPassword(inputs.value)) {
        mensaje = "Password: 8+ characters, number and symbol.";
        inputs.classList.add("warning");
        mensajeError(inputs, mensaje);
        return;
      }
    }
    // Si todo está bien, eliminar la clase de advertencia
    inputs.classList.remove("warning");
    // Restaurar el placeholder original
    if (inputs.classList.contains("name")) {
      inputs.setAttribute("placeholder", "name");
    } else if (inputs.classList.contains("lastName")) {
      inputs.setAttribute("placeholder", "lastName");
    } else if (inputs.classList.contains("password")) {
      inputs.setAttribute("placeholder", "password");
    } else if (inputs.classList.contains("email")) {
      inputs.setAttribute("placeholder", "email");
    }
  }

  // Mensaje de error
  function mensajeError(inputs, mensaje) {
    console.log("Mensaje de error generado:", mensaje);
    if (inputs.parentElement.querySelector(".error")) {
      return;
    }
    const div = document.createElement("div");
    const imgError = document.createElement("img");
    const error = document.createElement("p");
    div.classList.add("error");
    imgError.classList.add("imgError");
    imgError.src = "./images/icon-error.svg";
    imgError.alt = "Error";
    error.classList.add("form__error");
    error.textContent = mensaje;

    div.appendChild(imgError);
    div.appendChild(error);
    inputs.parentElement.appendChild(div);
  }

  // Borrar mensaje de error
  function borrarMensajeError(input) {
    const borrarError = input.parentElement.querySelector(".error");
    if (borrarError) {
      borrarError.remove();
    }
  }

  //Valida email
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  //Valida password
  function validarPassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }

  //Enviar el formulario
  function btnEnviar(e) {
    e.preventDefault();

    //Validar la campos antes de enviar el formulario
    const inputs = [inputName, inputLastName, inputEmail, inputPassword];
    let formValidado = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        formValidado = false;
        validarformulario({ target: input });
      } else if (
        input.classList.contains("email") &&
        !validarEmail(input.value)
      ) {
        formValidado = false;
        validarformulario({ target: input });
      } else if (
        input.classList.contains("password") &&
        !validarPassword(input.value)
      ) {
        formValidado = false;
        validarformulario({ target: input });
      }
    });
    // Si el formulario es válido, resetea
    if (formValidado) {
      resetForm();
    }
  }

  //Reinicia el formulario
  function resetForm() {
    console.log(formulario); // Verifica si el formulario está siendo encontrado
    if (formulario) {
      formulario.reset();
    } else {
      console.error("Formulario no encontrado");
    }
  }
});
