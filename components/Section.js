import { Card } from "./Card.js";

export class Section {
  constructor (config, selector) {
    this._config = config;
    this._selector = selector;
    this._galleryContainer = document.getElementById(this._selector);
  }

  renderer() {
    this._galleryContainer.textContent = "";
    for(let item of this._config.items ){
      const card = new Card (item.name, item.link);
      const galtml = card.render();
      this._galleryContainer.append(galtml);
    }
  }

  addItem( item ) {
    this._config.items.push( item );
    const card = new Card (item.name, item.link);
    const galtml = card.render();
    this._galleryContainer.append(galtml);
  }

}