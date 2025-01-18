const buttonAdd = document.querySelector("#profile__card");
const modaladd = document.querySelector(".dialog_gallery");
const buttonFecharModalAdd = document.querySelector("#fecharGallery");
const galleryContainer = document.getElementById("elements");
const criarGallery = document.querySelector(".popup__form-gallery");

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


buttonAdd.onclick = function(){

  modaladd.showModal();
}

buttonFecharModalAdd.onclick = function(){

  modaladd.close();

}

function renderCard(name, link){
  return `<div class="card">
            <img src="${link}" class="card__img" alt="cover" onclick="showImage('${link}', '${name}')">
            <div class="card__label">
              <p class="block">${name}</p>
              <div class="button button_like">
                <img src="./images/trash-icon.svg" data-name="${name}" class="trash" alt="delete" title="apagar"/>
                <img src="./images/coracao.svg" class="like" alt="like"/>
              </div>
            </div>
          </div>`
}

function initializeCards(){
  let pos = 0;
  for(let item of initialCards ){
    const galtml = renderCard(item.name, item.link, pos++);
    galleryContainer.insertAdjacentHTML('afterbegin', galtml);
  }
  updateDeleteButton();
  updateLikeButton();
}

initializeCards();

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

  modaladd.close();
});

function updateDeleteButton(){
  const deleteElement = document.querySelectorAll(".trash");

  for( const trash of deleteElement ) {
    trash.onclick = null;
    trash.addEventListener('click', function() {
      // Remove o card pai
      const cardToRemove = trash.closest('.card');
      cardToRemove.remove();
      const name = this.getAttribute('data-name');

      const index = initialCards.findIndex(item => item.name === name);
      initialCards.splice(index, 1);

    });
  }
}

function updateLikeButton(){
  const likeElement = document.querySelectorAll(".like");

  for( const like of likeElement ) {
    like.onclick = null;
    like.addEventListener('click', function() {
      if( like.src.indexOf("active") >= 0 ) {
        like.src = './images/coracao.svg';
      } else {
        like.src = './images/like_icon_active.svg';
      }

    });
  }
}





const fecharGallery = document.getElementById("fecharGallery2");
const popupGallery = document.querySelector(".popup__gallery");


fecharGallery.onclick = function(){
  popupGallery.close();
}

function showImage(src, text) {
  popupGallery.showModal();

  document.getElementById("popupImage").src = src;
  document.getElementById("popupText").innerHTML = text;

}
