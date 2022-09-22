export function CardInfo(props) {
  const {id, name, type, atk, def, desc, level, race, attribute, card_images} = props[0];
  const image = card_images[0].image_url;
  return `
      <figure id="${id}" class="card-container">
        <img src="${image}" alt="${name}"/>
        <aside class="card-info">
          <p>Name: <span>${name}</span></p>
          <p>Type: <span>${type}</span></p>
          <p>ATK: <span class="atk">${atk}</span></p>
          <p>DEF: <span class="def">${def}</span></p>
          <p>LVL: <span>${level}</span></p>
          <p>race: <span>${race}</span></p>
          <p>attribute: <span>${attribute}</span></p>
          <p>DESC: <span>${desc}</span></p>
        </aside>
      </figure>
  `
};