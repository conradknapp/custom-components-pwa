export class MyLoginForm extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(temp.content.cloneNode(true));
  }
}

const temp = document.createElement("template");
temp.innerHTML = `
      <style>
        input {
          color: pink;
          font-size: 2em;
        }
      </style>
      <form>
        <input type="text" />
        <button>Submit</button>
      </form>
  `;

customElements.define("login-form", MyLoginForm);
