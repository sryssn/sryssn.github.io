class footerBar extends HTMLElement {
    connectedCallback() {
    this.render();
    }

    render() {
    this.innerHTML = `
    <div class="text-center text-white bg-dark mx-auto p-3">
        <p>Created with <i class="bi bi-heart-fill text-danger"></i> by <strong>Suryo Sasono</strong></p>
    </div>
    `;
    }
}

customElements.define('footer-bar', footerBar);