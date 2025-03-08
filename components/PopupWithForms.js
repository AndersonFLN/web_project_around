import { Popup } from "./Popup.js";


export class PopupWithForms extends Popup{
  constructor (selector, handleFormSubmit){
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._getInputValues();
  }

  _getInputValues() {
    this._inputs = this._modal.querySelectorAll("input");
  }

  setEventListeners(openSelector = "") {
    const formElement = this._modal.querySelector("form");
    formElement.addEventListener('submit', this._handleFormSubmit);
    super.setEventListeners(openSelector);
  }

  close() {
    for(const input of this._inputs||[]){
      input.value = "";
    }
    super.close();
  }
}