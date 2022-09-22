export function Link({url = "#", texto}) {
  const $link = document.createElement("a");
  $link.href = url;
  $link.innerText = texto;
  return $link;
};