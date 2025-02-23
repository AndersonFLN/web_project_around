import { popupGallery } from "./utils.js";

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

    const likeButton = cardElement.querySelector(".card__img");
    likeButton.addEventListener("click", function() {
      me.showImage();
    });

    const imageFull = cardElement.querySelector(".like");
    imageFull.addEventListener("click", function() {
      me.onLikeCard(this);
    });

    return cardElement;
  }

  onDeleteCard(trash) {
    const cardToRemove = trash.closest('.card');
    cardToRemove.remove();

    const index = initialCards.findIndex(item => item.name === this._name);
    initialCards.splice(index, 1);
  }

  onLikeCard(like){
    if( like.src.indexOf("active") >= 0 ) {
      like.src = './images/coracao.svg';
    } else {
      like.src = './images/like_icon_active.svg';
    }
  }

  showImage() {
    popupGallery.showModal();

    document.getElementById("popupImage").src = this._image_url;
    document.getElementById("popupText").innerHTML = this._name;

  }
}
