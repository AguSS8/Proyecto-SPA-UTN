import { LoginForm } from "../components/Login.js";
import { RegisterForm } from "../components/RegisterForm.js";
import indexController from "../controllers/index.controller.js";
import { dataHandler } from "../functions/dataFetch.js";
import {login, register} from "../functions/handlerUsers.js"
import urlApi from "../functions/urlApi.js";

export async function Index() {
  let { hash } = location;

  if (!hash || hash === '#/') {
    await dataHandler({
      url: urlApi.url,
      cb: indexController.index
    });
  }
  else if (hash === "#registro"){
    document.getElementById("main").innerHTML = RegisterForm();
    document.querySelector(".spinner").style.display = "none";
    document.getElementById("registerForm").addEventListener("submit", register);
  }
  else if (hash === "#inicio-sesion"){
    document.getElementById("main").innerHTML = LoginForm();
    document.querySelector(".spinner").style.display = "none";
    document.getElementById("loginForm").addEventListener("submit", login);
  }

  else {
    await dataHandler({
      url: urlApi.byName+hash.slice(2),
      cb: indexController.cardDetail
    })
  }

};
