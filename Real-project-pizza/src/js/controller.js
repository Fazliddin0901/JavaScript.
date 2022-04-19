const { async } = require('regenerator-runtime');

import {
  loadRecipe,
  state,
  seachResults,
  paginationLogic,
  updateServings,
  addBookmark,
  daleteBookmark,
  getLocalstorege,
} from './model.js';
import resipeView from './views/resipeView.js';

import searchView from './views/searchView.js';
import resipeView from './views/resipeView.js';
import resultView from './views/resultView.js';
import paginationView from './views/pagination.js';
import bookmarksView from './views/bookmarksView.js';

const controllServings = function (number) {
  if (number <= 0) {
    return;
  }
  updateServings(number);
  resipeView.render(state.recipe);
};

const recipeContainer = document.querySelector('.recipe');

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    resipeView.loadingSpinner();
    await loadRecipe(id);
    const data = state.recipe;
    resipeView.render(data);
  } catch (error) {
    console.log(error);
    resipeView.rendererror();
  }
};
2;

const searchController = async function () {
  const inputValue = searchView.getQuery();

  await seachResults(inputValue);

  const data = paginationLogic();
  resultView.render(data);
  paginationView.render(state.search);
};

const paginationController = async function (page) {
  try {
    const data = paginationLogic(page);
    paginationView.render(state.search);
    resultView.render(data);
  } catch (error) {
    alert(error);
  }
};

const controllBookmark = function () {
  if (state.recipe.bookMarked) {
    daleteBookmark(state.recipe.id);
  } else {
    addBookmark(state.recipe);
    console.log(111);
  }

  bookmarksView.render(state.bookmarks);

  resipeView.render(state.recipe);
};

const bookmarcLocal = function () {
  getLocalstorege();
  bookmarksView.render(state.bookmarks);
};

bookmarksView.addHandle(bookmarcLocal);
resipeView.addHandleBookmaek(controllBookmark);
searchView.addHandlerEvent(searchController);
resipeView.addHandlerEvent(showRecipe);
paginationView.addHandlerEvent(paginationController);
resipeView.addHandleEventServings(controllServings);
