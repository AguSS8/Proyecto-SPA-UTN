import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Spinner } from "./components/Spinner.js";
import { Index } from "./routes/index.routes.js";

const d = document;

export function App(params) {  
  d.getElementById("root").innerHTML = null;
  d.getElementById("root").appendChild(Header());
  d.getElementById("root").appendChild(Main());
  d.getElementById("root").appendChild(Spinner())
  Index();
}; 