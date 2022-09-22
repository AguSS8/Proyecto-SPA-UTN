export function SearchForm () {
 const $searchForm = document.createElement("form");
 const $input = document.createElement("input");
 $searchForm.classList.add("search-form");
 $input.name = "search";
 $input.type = "search";
 $input.placeholder = "Buscar Carta";
 $searchForm.appendChild($input);
 const $btnSearch = document.createElement("i");
 $btnSearch.classList.add("ri-search-line");
 $searchForm.appendChild($btnSearch);
 return $searchForm;
}