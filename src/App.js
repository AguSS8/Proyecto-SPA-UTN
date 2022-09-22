import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { dataHandler } from "./functions/dataFetch.js";
import urlApi from "./functions/urlApi.js";
import { Index } from "./routes/index.routes.js";

const d = document;

export function App(params) {
  d.getElementById("root").appendChild(Header());
  d.getElementById("root").appendChild(Main());
  Index();
}; 