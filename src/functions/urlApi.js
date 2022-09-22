const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date',
  byPlatform = `${url}?platform=`,
  byCategory = `${url}?category=`,
  byId = `https://www.freetogame.com/api/game?id=`;



export default {
  url,
  byPlatform,
  byCategory,
  byId
};