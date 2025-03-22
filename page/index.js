import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

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


//lida com dados do usuario
const user = new UserInfo(
  {
    name: "Jacques Cousteau",
    job: "Explorador"
  }
)

// controller da sessão gallery
const section = new Section({items: initialCards, renderer:()=>{} }, "elements");
section.renderer();


// popup para o botão editar perfil
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const inputName = document.querySelector("#input_popup-name");
  const inputJob = document.querySelector("#input_popup-job");

  user.setUserInfo(
    {
      name: inputName,
      job: inputJob
    }
  );

  const labelName = document.querySelector("#profile__name");
  const labelDesc = document.querySelector("#profile__description");

  labelName.textContent = inputName.value;
  labelDesc.textContent = inputJob.value;

  popupUser.close();
}
const popupUser = new PopupWithForms(".dialog", handleProfileFormSubmit);
popupUser.setEventListeners("#profile__button");

// popup para o botão add image
const handleGalleryFormSubmit = (evt) => {
  evt.preventDefault();

  const link = document.querySelector("#input_popup-link");
  const title = document.querySelector("#input_popup-title");

  section.addItem(
    {
      name: title.value,
      link: link.value
    }
  );


  popupAddImg.close();
}

// popup para o imagem expandida
const popupAddImg = new PopupWithForms(".dialog_gallery", handleGalleryFormSubmit);
popupAddImg.setEventListeners("#profile__card");

// validadores
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

