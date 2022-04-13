export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const data = await fetch(
    ` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const dataJSON = await data.json();
  const obj = dataJSON.data.recipe;
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
};
