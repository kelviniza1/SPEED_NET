document.addEventListener("DOMContentLoaded", () => {
    const coverageSearch = new CoverageSearch(
        document.querySelector("#coverage-search"),
        [...document.querySelectorAll(".coverage-card")]
    );

    coverageSearch.init();
});

class CoverageSearch {
    searchInput = null;
    clearButton = null;
    cards = [];
    status = null;
    emptyState = null;
    whatsappLink = null;

    constructor(searchInput, cards) {
        this.searchInput = searchInput;
        this.cards = cards;
        this.clearButton = document.querySelector("#clear-search");
        this.status = document.querySelector("#coverage-status");
        this.emptyState = document.querySelector("#no-coverage");
        this.whatsappLink = document.querySelector("#coverage-whatsapp");
    }

    init() {
        if (!this.searchInput || !this.cards.length) {
            return;
        }

        this.searchInput.addEventListener("input", () => this.filter());
        this.clearButton.addEventListener("click", () => this.clear());
    }

    normalize(value) {
        return value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    filter() {
        const originalTerm = this.searchInput.value.trim();
        const term = this.normalize(originalTerm);
        let matches = 0;

        this.cards.forEach((card) => {
            const isMatch = this.normalize(card.dataset.colonia).includes(term);
            card.hidden = !isMatch;
            matches += isMatch ? 1 : 0;
        });

        this.emptyState.hidden = matches !== 0;
        this.status.hidden = matches === 0;
        this.clearButton.classList.toggle("visible", originalTerm.length > 0);

        if (matches > 0) {
            const label = matches === 1 ? "colonia encontrada" : "colonias encontradas";
            this.status.innerHTML = `<strong>${matches} ${label}</strong><span>Selecciona una colonia para solicitar información.</span>`;
        } else {
            const message = `Hola Speednet, deseo consultar si tienen cobertura en ${originalTerm}.`;
            this.whatsappLink.href = `https://wa.me/50487362897?text=${encodeURIComponent(message)}`;
        }
    }

    clear() {
        this.searchInput.value = "";
        this.filter();
        this.searchInput.focus();
    }
}
