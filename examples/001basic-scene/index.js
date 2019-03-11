class BasicButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attrText = this.attributes.txt.value;
    this.txt = `<button>${this.attrText}</button>`;
    this.innerHTML = this.txt;
  }



}

customElements.define('basic-button', BasicButton);
