export class MyButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", e => {
      console.log("clicked");
    });
  }

  static template() {
    return `
    <style>
      :host {
        display: block;
        contain: content;
        text-align: center;
        background: papayawhip;
        max-width: 500px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(128, 100, 38, 0.34);
        border-radius: 8px;
        border: 2px dashed #ccc049;
      }
    </style>
    <button>Click me</button>`;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

let template = document.createElement("template");
template.innerHTML = MyButton.template();

customElements.define("my-button", MyButton);
