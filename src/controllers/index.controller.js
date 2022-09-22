import { CardInfo } from "../components/CardInfo.js";
import { Cards } from "../components/Cards.js";

function index({data}) {
  let cards = "";
  data.forEach(card => cards += Cards(card));
  document.getElementById("main").innerHTML = cards;
}

export default{
  index
};