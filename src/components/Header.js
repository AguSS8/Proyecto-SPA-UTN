import { Link } from "./Link.js";
import { Title } from "./Logo.js";
import { SearchForm } from "./SearchForm.js";

export function Header() {
  const $header = document.createElement("header");
  $header.id = "header";
  $header.appendChild(Title());
  $header.appendChild(SearchForm());
  $header.appendChild(Link({texto:"Registrarse"}));
  $header.appendChild(Link({texto:"Iniciar Sesion"}));
  return $header;
}