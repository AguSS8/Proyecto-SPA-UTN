export function Spinner() {
  const $spinner = document.createElement("img");
  $spinner.src = "assets/img/spinner.png";
  $spinner.alt = "Cargando!!";
  $spinner.classList.add ("spinner");

  return $spinner;
}