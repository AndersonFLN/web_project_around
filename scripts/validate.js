function enableValidation(config){
  //Pegar formulario que vamso validar
  const form = document.querySelector(config.formSelector);
  const inputs = form.querySelectorAll(config.inputSelector);
  const errorElements = form.querySelectorAll(config.inputErrorClass);
  const submitButton = form.querySelector(config.submitButtonSelector);

  for( let i = 0; i < inputs.length; i++ ) {
    const input = inputs[i];
    const errorElement = errorElements[i];

    input.addEventListener("input", (event) => {
      const isValid = input.checkValidity();
      if (isValid) {
        //esconder mensagem de erro
        errorElement.classList.remove(config.errorClass);
        submitButton.disabled = false;
      } else {
        //mostrar mensagem de erro
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(config.errorClass);
        submitButton.disabled = true;
      }

    });

  }
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible",
});

enableValidation({
  formSelector: ".popup__form-gallery",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible",
});


