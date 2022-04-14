const { async } = require('regenerator-runtime');

import * as model from './model.js';
import recipeViev from './views/recipeView.js';
import searchView from './views/searchView.js';
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    // console.log(id);
    recipeViev.spinner();

    await model.loadRecipe(id);
    // await Promise.race([timeout(2), ]);

    recipeViev.render(model.state.recipe);
  } catch (err) {
    recipeViev.errorNotify();
  }
};

recipeViev.addHandleEvent(showRecipe);
searchView.addHandleEvent(searchView.getValue);
