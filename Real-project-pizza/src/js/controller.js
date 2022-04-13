const { async } = require('regenerator-runtime');

import * as model from './model.js';
import recipeViev from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    // console.log(id);
    recipeViev.spinner();
    await model.loadRecipe(id);

    recipeViev.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

window.addEventListener('hashchange', showRecipe);
window.addEventListener('load', showRecipe);
