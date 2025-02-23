import { initialCards, galleryContainer, initializeCards } from "./index.js";

const criarGallery = document.querySelector(".popup__form-gallery");
const modalAdd = document.querySelector(".dialog_gallery");

criarGallery.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const link = document.querySelector("#input_popup-link");
  const title = document.querySelector("#input_popup-title");
  initialCards.push(
    {
      name: title.value,
      link: link.value
    }
  );

  galleryContainer.textContent = "";
  initializeCards();

  modalAdd.close();
});

const closeGallery = document.getElementById("closeGallery2");
const popupGallery = document.querySelector(".popup__gallery");

closeGallery.onclick = function(){
  popupGallery.close();
}

popupGallery.addEventListener('click', function (evt) {
  if( evt.offsetX < 0 || evt.offsetX > popupGallery.clientWidth || evt.offsetY < 0 || evt.offsetY > popupGallery.clientHeight ) {
    popupGallery.close();
  }
});


modalAdd.addEventListener('click', function (evt) {
  if( evt.offsetX < 0 || evt.offsetX > modalAdd.clientWidth || evt.offsetY < 0 || evt.offsetY > modalAdd.clientHeight ) {
    modalAdd.close();
  }
});


const buttonAdd = document.querySelector("#profile__card");
buttonAdd.onclick = function(){
  modalAdd.showModal();
}

const buttonCloseModalAdd = document.querySelector("#closeGallery");
buttonCloseModalAdd.onclick = function(){
  modalAdd.close();
}

export { popupGallery };