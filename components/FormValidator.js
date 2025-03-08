export class FormValidator {
  constructor (config, formSelector ) {
    this._config = config;
    this._formSelector = formSelector;
  }

  enableValidation() {
    const form = document.querySelector(this._formSelector);
    const inputs = form.querySelectorAll(this._config.inputSelector);
    const errorElements = form.querySelectorAll(this._config.inputErrorClass);
    const submitButton = form.querySelector(this._config.submitButtonSelector);

    for( let i = 0; i < inputs.length; i++ ) {
      const input = inputs[i];
      const errorElement = errorElements[i];

      input.addEventListener("input", (event) => {
        const isValid = input.checkValidity();
        if (isValid) {
          //esconder mensagem de erro
          errorElement.classList.remove(this._config.errorClass);
          submitButton.disabled = false;
        } else {
          //mostrar mensagem de erro
          errorElement.textContent = input.validationMessage;
          errorElement.classList.add(this._config.errorClass);
          submitButton.disabled = true;
        }

      });

    }
  }
}



