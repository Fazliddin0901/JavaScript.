import { async } from 'regenerator-runtime';

export const getJson = async function (url) {
  try {
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (err) {
    alert(err);
  }
};
