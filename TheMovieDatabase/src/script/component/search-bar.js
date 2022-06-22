class searchBar extends HTMLElement {
    connectedCallback() {
    this.render();
    }

    render() {
    this.innerHTML = `
    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center">Search Movie</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Movie Title" id="search-input">
                    <button class="btn btn-dark" type="button" id="search-button">Search</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('search-bar', searchBar);