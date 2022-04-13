import { API_URL } from './config.js';
import { getJson } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const json = await getJson(API_URL + id);

    // const dataJSON = await data.json();
    const obj = json.data.recipe;
    console.log(obj);
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
  } catch (err) {
    alert(err);
  }
};
