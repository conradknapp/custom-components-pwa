export class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  static template() {
    return `
      <style>
        nav {
          color: black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        nav p {
          font-style: italic;
        }

        span:first-of-type {
          display: flex;
          width: 90%;
          justify-content: space-between;
          margin: 10px;
        }

        span:last-of-type {
          margin: 40px;
        }

        span:last-of-type h1 {
          margin-bottom: 20px;
        }
      </style>

      <nav>
        <span>
          <p>WoodForWalls</p>
          <a href="https://github.com/conradknapp" target="_blank"><i class="material-icons">subject</i></a>
        </span>
        <span>
          <h1>The Outdoors, Indoors</h1>
          <p>Upcycled wooden tiles for your interior</p>
        </span>
      </nav>
    `;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

const template = document.createElement("template");
template.innerHTML = NavBar.template();

customElements.define("sweet-navbar", NavBar);
