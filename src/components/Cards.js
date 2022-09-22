export function Cards (props){
  const {id, name, card_images} = props;
  const image = card_images[0].image_url_small;
  return `
  <article id="${id}">
    <img src="${image}" alt="${name}"/>
  </article>
  `;
};