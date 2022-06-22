class movieLists extends HTMLElement {
    connectedCallback() {
    this.render();
    }

    render() {
    this.innerHTML = `
    <div class="container">
        <hr>
        <div class="row" id="movie-list">
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                    </div>            
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('movie-lists', movieLists);