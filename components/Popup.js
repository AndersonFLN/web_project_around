export class Popup {
  constructor (selector){
    this._selector = selector;
    this._modal = document.querySelector(selector);
  }

  open(){
    this._modal.showModal();
  }

  close(){
    this._modal.close();
  }

  _handleEscClose(){

  }

  setEventListeners( openSelector = "" ){

    const buttonClose = this._modal.querySelector(".button_close");
    buttonClose.onclick = () => {
      this.close();
    }

    this._modal.addEventListener('click', function (evt) {
      if( evt.offsetX < 0 || evt.offsetX > this.clientWidth || evt.offsetY < 0 || evt.offsetY > this.clientHeight ) {
        this.close();
      }
    });

    if( openSelector ) {
      const buttonOpen = document.querySelector(openSelector);
      buttonOpen.onclick = () => {
        this.open();
      }
    }


  }


}