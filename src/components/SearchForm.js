export function SearchForm () {
 const $searchForm = document.createElement("form");
 const $input = document.createElement("input");
 $searchForm.classList.add("search-form");
 $input.name = "search";
 $input.type = "search";
 $input.placeholder = "Nombre de Carta";
 $searchForm.appendChild($input);
 return $searchForm;
}