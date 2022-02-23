const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const characterId = params.get("id");

console.log(characterId);

const specificCharacterUrl = "https://rickandmortyapi.com/api/character/" + characterId;

async function getCharacter() {
  const response = await fetch(specificCharacterUrl);
  const characterDetails = await response.json();
  console.log(characterDetails);

  makeHtml(characterDetails);
}

getCharacter();

const detailsContainer = document.querySelector(".details-container");

function makeHtml(character) {
  let episodeList = "";

  detailsContainer.innerHTML = `
                      <div class="details-character-container">
                        <h1>${character.name}</h1>
                        <img src="${character.image}">
                        <div>Gender: ${character.gender}</div>
                        <div>Origin: ${character.origin.name}</div>
                        <div>Location: ${character.location.name}</div>
                        <div>Species: ${character.species}</div>
                        <div>Status: ${character.status}</div>
                        <div>Appear in: ${character.episode.length} episodes</div>                         
                      </div>`;
}
