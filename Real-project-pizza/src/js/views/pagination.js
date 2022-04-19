import icons from '../../img/icons.svg';
class PaginationView {
  #parendElement = document.querySelector('.pagination');
  #data;
  render(data) {
    this.#data = data;
    this.#generateHTML();
  }
  addHandlerEvent(handle) {
    this.#parendElement.addEventListener('click', function (e) {
      if (e.target.closest('.btn--inline')) {
        let g = +e.target.closest('.btn--inline').getAttribute('id');
        handle(g);
      }
    });
  }

  #generateHTML() {
    this.#parendElement.innerHTML = '';
    const currentPage = this.#data.page;
    const endPage = Math.ceil(this.#data.results.length / this.#data.perPage);
    const btnPre = `<button class="btn--inline pagination__btn--prev" id=${
      currentPage - 1
    }>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;

    const btnNext = `<button class="btn--inline pagination__btn--next" id=${
      currentPage + 1
    }>
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    if (currentPage > 1) {
      this.#parendElement.insertAdjacentHTML('afterbegin', btnPre);
    }
    if (endPage > currentPage) {
      this.#parendElement.insertAdjacentHTML('afterbegin', btnNext);
    }
  }
}
export default new PaginationView();
