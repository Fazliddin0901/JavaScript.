import icons from '../../img/icons.svg';
class RecipeView {
  #errorMessage = 'Siz qidirayotgan malumot topilmadi, qayta urinib ko`ring';
  #parendElement = document.querySelector('.recipe');
  #data;
  render(data) {
    this.#data = data;
    this.#clearHTML();
    this.#generateHTML();
  }

  addHandleBookmaek(handle) {
    this.#parendElement.addEventListener('click', function (e) {
      const btn = e.target.closest(`.btn--round`);

      if (!btn) {
        return;
      }
      handle();
    });
  }

  rendererror() {
    const html = `<div class="error">
 <div>
   <svg>
     <use href="${icons}#icon-alert-triangle"></use>
   </svg>
 </div>
 <p>${this.#errorMessage}</p>
</div>`;
    this.#clearHTML();
    this.#parendElement.insertAdjacentHTML('afterbegin', html);
  }

  #renderIng = function (ings) {
    return ings.map(val => {
      return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${val.quantity ? val.quantity : ''}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${val.unit}</span>
        ${val.description}
      </div>
    </li>`;
    });
  };

  #clearHTML() {
    this.#parendElement.innerHTML = '';
  }

  loadingSpinner() {
    const html = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#clearHTML();
    this.#parendElement.insertAdjacentHTML('afterbegin', html);
  }
  addHandlerEvent(data) {
    ['hashchange', 'load'].forEach(val => {
      window.addEventListener(val, data);
    });
  }

  addHandleEventServings(handle) {
    this.#parendElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');

      if (!btn) return;
      console.log(btn);

      const numberServings = +btn.dataset.serv;
      console.log(numberServings);
      handle(numberServings);
    });
  }

  #generateHTML = function () {
    const html = `
    <figure class="recipe__fig">
    <img src="${this.#data.image}" alt="${
      this.#data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this.#data.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this.#data.time
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this.#data.servings
      }</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings" id="${
          this.#data.servings - 1
        }" data-serv="${this.#data.servings - 1}">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings id="${
          this.#data.servings + 1
        }" data-serv="${this.#data.servings + 1}">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      this.#data.bookMarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this.#renderIng(this.#data.ingredients).join('')}
      
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        this.#data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this.#data.url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  
    `;
    this.#parendElement.insertAdjacentHTML('afterbegin', html);
  };
}
export default new RecipeView();
