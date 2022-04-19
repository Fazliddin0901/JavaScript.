import { floor } from 'lodash-es';
import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: {},
    page: 1,
    perPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(API_URL + id);
    const obj = data.data.recipe;
    state.recipe = {
      id: obj.id,
      image: obj.image_url,
      publisher: obj.publisher,
      ingredients: obj.ingredients,
      title: obj.title,
      servings: obj.servings,
      url: obj.source_url,
      time: obj.cooking_time,
    };

    if (state.bookmarks.some(val => val.id === state.recipe.id)) {
      state.recipe.bookMarked = true;
      console.log(state.recipe.bookMarked);
    }

    // return state;
  } catch (error) {
    throw error;
  }
};

export const seachResults = async function (searchkey) {
  try {
    const data = await getJSON(API_URL + `?search=${searchkey}`);
    const getArr = data.data.recipes;
    state.search.query = searchkey;
    state.search.results = getArr.map(val => {
      return {
        id: val.id,
        image: val.image_url,
        publisher: val.publisher,
        title: val.title,
      };
    });
  } catch (error) {
    throw error;
  }
};

export const paginationLogic = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.perPage;
  const end = page * state.search.perPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (peopleNumber) {
  console.log(state.recipe.ingredients);

  state.recipe.ingredients.map(val => {
    val.quantity = (val.quantity * peopleNumber) / state.recipe.servings;
  });

  state.recipe.servings = peopleNumber;
};

export const getLocalstorege = function () {
  let arr = JSON.parse(localStorage.getItem('bookmarks'));
  state.bookmarks = arr;
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  state.recipe.bookMarked = true;
  console.log(state.bookmarks);
  saveLocalStorage();
};

export const daleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(val => val.id == id);

  state.bookmarks.splice(index, 1);
  state.recipe.bookMarked = false;
  console.log(state.bookmarks);
  saveLocalStorage();
};

const saveLocalStorage = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
