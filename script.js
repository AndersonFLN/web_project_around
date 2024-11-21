const buttonEditar = document.querySelector("#profile__button");
const buttonFecharModal = document.querySelector("#fechar");

const modal = document.querySelector("dialog");

buttonFecharModal.onclick = function() {
  modal.close();
}

buttonEditar.onclick = function() {
  let inputName = document.querySelector("#input_popup-name");
  let inputJob = document.querySelector("#input_popup-job");

  let labelName = document.querySelector("#profile__name");
  let labelDesc = document.querySelector("#profile__description");

  inputName.value = labelName.textContent;
  inputJob.value = labelDesc.textContent;

  modal.showModal();
}


// Vamos encontrar o formulário no DOM
let formElement = document.querySelector("dialog .popup__form");

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {

    // Esta linha impede o navegador
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Pegue os valores de cada campo do valor da propriedade correspondente
    let inputName = document.querySelector("#input_popup-name");
    let inputJob = document.querySelector("#input_popup-job");

    // Selecione os elementos aos quais os valores dos campos serão inseridos
    let labelName = document.querySelector("#profile__name");
    let labelDesc = document.querySelector("#profile__description");

    // Insira novos valores usando a
    // propriedade textContent
    labelName.textContent = inputName.value;
    labelDesc.textContent = inputJob.value;
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);



