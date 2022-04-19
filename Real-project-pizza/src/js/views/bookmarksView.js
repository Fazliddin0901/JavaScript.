import icons from '../../img/icons.svg';

class BookmarksViev {
  #parentElement = document.querySelector('.bookmarks__list');
  #data;

  render(data) {
    this.#data = data;
    this.#clearHTML();
    this.#data.map(val => {
      this.#generateHTML(val);
    });
  }
  #clearHTML() {
    this.#parentElement.innerHTML = '';
  }
  #generateHTML(obj) {
    const html = `<li class="preview">
    <a class="preview__link" href="#${obj.id}">
      <figure class="preview__fig">
        <img src="${obj.image}" alt="${obj.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__name">
        ${obj.title}
        </h4>
        <p class="preview__publisher">${obj.name}}</p>
      </div>
    </a>
  </li>`;

    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
  addHandle(handle) {
    window.addEventListener('load', function () {
      handle();
    });
  }
}
export default new BookmarksViev();
