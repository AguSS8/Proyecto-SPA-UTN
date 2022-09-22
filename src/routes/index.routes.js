import indexController from "../controllers/index.controller.js";
import { dataHandler } from "../functions/dataFetch.js";
import urlApi from "../functions/urlApi.js";

export function Index() {
  let $main = document.getElementById("main");
  $main.innerHTML = null;
  dataHandler({
    url: urlApi.url,
    cb: indexController.index
  });
};