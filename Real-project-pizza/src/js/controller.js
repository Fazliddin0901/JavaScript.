const { async } = require('regenerator-runtime');
import icons from '../img/icons.svg';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const renderIng = function (data) {
  let arr = data.map(val => {
    return `  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${val.quantity}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${val.unit}</span>
     ${val.description}
    </div>
  </li>`;
  });
  return arr;
};

const showRecipe = async function () {
  const id = window.location.hash.slice(1);
  console.log(id);

  const data = await fetch(
    ` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const dataJSON = await data.json();
  const obj = dataJSON.data.recipe;
  console.log(obj);
  const state = {
    id: obj.id,
    image: obj.image_url,
    publisher: obj.publisher,
    ingredients: obj.ingredients,
    title: obj.title,
    servings: obj.servings,
    url: obj.source_url,
    time: obj.cooking_time,
  };
  recipeContainer.innerHTML = '';
  renderHtml(obj);
};

const renderHtml = function (obj) {
  const html = ` <figure class="recipe__fig">
  <img src="${obj.image_url}" alt="Tomato" class="recipe__img" />
  <h1 class="recipe__title">
    <span>Pasta with tomato cream sauce</span>
  </h1>
</figure>

<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="src/img/icons.svg#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${
      obj.cooking_time
    }</span>
    <span class="recipe__info-text">minutes</span>
  </div>
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="src/img/icons.svg#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">4</span>
    <span class="recipe__info-text">servings</span>

    <div class="recipe__info-buttons">
      <button class="btn--tiny btn--increase-servings">
        <svg>
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--increase-servings">
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
      <use href="${icons}#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">


 ${renderIng(obj.ingredients).join('')}


  </ul>
</div>

<div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
  <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn--small recipe__btn"
    href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </a>
</div>`;
  recipeContainer.insertAdjacentHTML(`afterbegin`, html);
};

['hashchange', 'load'].map(val => {
  window.addEventListener(val, showRecipe);
});

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
