import { Card } from "./Card.js";
import { FormValidator } from "./formValidator.js";

const buttonEditar = document.querySelector("#profile__button");
const buttonFecharModal = document.querySelector("#fechar");

const modal = document.querySelector(".dialog");

buttonFecharModal.onclick = function() {
  modal.close();
}

buttonEditar.onclick = function() {
  const inputName = document.querySelector("#input_popup-name");
  const inputJob = document.querySelector("#input_popup-job");

  const labelName = document.querySelector("#profile__name");
  const labelDesc = document.querySelector("#profile__description");

  inputName.value = labelName.textContent;
  inputJob.value = labelDesc.textContent;

  modal.showModal();
}

const formElement = document.querySelector("dialog .popup__form");

function handleProfileFormSubmit(evt) {

    evt.preventDefault();

    const inputName = document.querySelector("#input_popup-name");
    const inputJob = document.querySelector("#input_popup-job");

    const labelName = document.querySelector("#profile__name");
    const labelDesc = document.querySelector("#profile__description");

    labelName.textContent = inputName.value;
    labelDesc.textContent = inputJob.value;
    modal.close();
}

formElement.addEventListener('submit', handleProfileFormSubmit);

modal.addEventListener('click', function (evt) {
  if( evt.offsetX < 0 || evt.offsetX > modal.clientWidth || evt.offsetY < 0 || evt.offsetY > modal.clientHeight ) {
    modal.close();
  }
});

 const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

 const galleryContainer = document.getElementById("elements");
 function initializeCards(){
  for(let item of initialCards ){
    const card = new Card (item.name, item.link);
    const galtml = card.render();
    galleryContainer.append(galtml);
  }
}

initializeCards();


const validForm1Cfg = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible",
};
const validForm1 = new FormValidator( validForm1Cfg, ".popup__form");
validForm1.enableValidation();

const validForm2Cfg = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_popup-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: ".form__error",
  errorClass: "form__error_visible"
};
const validForm2 = new FormValidator( validForm2Cfg, ".popup__form-gallery" );
validForm2.enableValidation();

export {initialCards, galleryContainer, initializeCards }