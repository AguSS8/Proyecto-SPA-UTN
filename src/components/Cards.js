export function Cards (props){
  const {id, name, card_images} = props;
  const image = card_images[0].image_url_small;
  return `
  <figure id="${id}">
    <a href="#/${name}"><img src="${image}" alt="${name}"/></a>
  </figure>
  `;
};