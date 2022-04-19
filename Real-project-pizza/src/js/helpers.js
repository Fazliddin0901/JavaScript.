import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const responce = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await responce.json();
    if (!responce.ok) {
      throw new Error(`${responce.statusText}:${responce.status}`);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
