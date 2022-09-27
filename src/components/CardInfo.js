export function CardInfo(props) {
  const {id, name, type, atk, def, desc, level, race, attribute, card_images} = props[0];
  const image = card_images[0].image_url;
  return `
      <figure id="${id}" class="card-container">
        <img src="${image}" alt="${name}"/>
        <aside class="card-info">
          <p>Name: <span>${name}</span></p>
          <p>Type: <span>${type }</span></p>
          <p>ATK: <span class="atk">${atk || "N/A"}</span></p>
          <p>DEF: <span class="def">${def || "N/A"}</span></p>
          <p>LVL: <span>${level || "N/A"}</span></p>
          <p>Race: <span>${race}</span></p>
          <p>Attribute: <span>${attribute || "N/A"}</span></p>
          <p>DESC: <span>${desc}</span></p>
        </aside>
      </figure>
  `
};