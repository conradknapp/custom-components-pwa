import { reallyLongString } from "./hero-image.js";

export class HeroPic extends HTMLElement {
  constructor() {
    super();
  }

  static template() {
    return String.raw`
    <style>
    img {
      min-height: 65vh;
      object-fit: cover;
    }
    </style>
    <img src=${reallyLongString} />`;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

let template = document.createElement("template");
template.innerHTML = HeroPic.template();

customElements.define("hero-pic", HeroPic);
