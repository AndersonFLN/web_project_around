import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup{
  constructor (selector){
    super(selector);
  }

  open( title, image ){
    this._modal.querySelector("#popupText").innerHTML = title;
    this._modal.querySelector("#popupImage").src = image;
    super.open();
  }

}