import { CardInfo } from "../components/CardInfo.js";
import { Cards } from "../components/Cards.js";

function index({data}) {
  let $main = document.getElementById("main");
  $main.innerHTML = "";
  let cards = "";
  data.forEach(card => cards += Cards(card));
  $main.innerHTML = cards;
}

function cardDetail({data}) {
  let $main = document.getElementById("main");
  $main.innerHTML = "";
  let card = data;
  $main.innerHTML = CardInfo(card);
}

export default{
  index,
  cardDetail
};