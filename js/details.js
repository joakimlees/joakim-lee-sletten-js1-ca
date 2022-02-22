const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const characterId = params.get("id");

console.log(characterId);

const specificCharacterUrl = "https://rickandmortyapi.com/api/character/" + characterId;

async function getCharacter() {
  const response = await fetch(specificCharacterUrl);
  const json = await response.json();
  console.log(json);
}

getCharacter();
