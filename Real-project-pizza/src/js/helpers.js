import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    let data = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (err) {
    throw err;
  }
};
