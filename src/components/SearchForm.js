import { Input } from "./Input.js";

export function SearchForm () {
 const $searchForm = document.createElement("form");
 const $input = Input({
  name:"search",
  type:"search",
  placeholder:"Buscar Carta"
 })
 $searchForm.classList.add("search-form");
 $searchForm.appendChild($input);
 const $btnSearch = document.createElement("i");
 $btnSearch.classList.add("ri-search-line");
 $searchForm.appendChild($btnSearch);
 return $searchForm;
}