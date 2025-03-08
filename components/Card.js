import { PopupWithImage } from "./PopupWithImage.js";

export class Card {

  constructor (name, image_url){
    this._name = name;
    this._image_url = image_url;
  }

  render() {
    const cardTemplate  = document.querySelector("#card-template").content;

    const cardElement = cardTemplate.cloneNode(true);

    const imageElement = cardElement.querySelector(".card__img");
    imageElement.src = this._image_url;
    imageElement.alt = this._name;

    const nameElement = cardElement.querySelector(".block");
    nameElement.innerHTML = this._name;

    const trashButton = cardElement.querySelector(".trash");
    const me = this;
    trashButton.addEventListener("click", function() {
      me.onDeleteCard(trashButton);
    });

    const imageFull = cardElement.querySelector(".card__img");
    imageFull.addEventListener("click", function() {
      me.showImage();
    });

    const likeButton = cardElement.querySelector(".like");
    likeButton.addEventListener("click", function() {
      me.onLikeCard(this);
    });

    return cardElement;
  }

  onDeleteCard(trash) {
    const cardToRemove = trash.closest('.card');
    cardToRemove.remove();
  }

  onLikeCard(like){
    if( like.src.indexOf("active") >= 0 ) {
      like.src = './images/coracao.svg';
    } else {
      like.src = './images/like_icon_active.svg';
    }
  }

  showImage() {
    const popup = new PopupWithImage(".popup__gallery");
    popup.setEventListeners("");
    popup.open(this._name, this._image_url);
  }
}
