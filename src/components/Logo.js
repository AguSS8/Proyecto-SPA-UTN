import { Link } from "./Link.js";


export function Title() {
  const $title = Link({});
  const $logoTitle = document.createElement("img");
  $logoTitle.src = "assets/img/logo.jpg";
  $logoTitle.width = 250;
  $logoTitle.alt = "Logo de Yugioh";
  $title.appendChild($logoTitle)
  return $title;
};