const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const characterId = params.get("id");

console.log(characterId);

const specificCharacterUrl = "https://rickandmortyapi.com/api/character/" + characterId;

async function getCharacter() {
  try {
    const response = await fetch(specificCharacterUrl);
    const characterDetails = await response.json();
    console.log(characterDetails);

    detailsContainer.innerHTML = "";

    makeHtml(characterDetails);
  } catch (error) {
    console.log("Unable to load the given character", error);
    detailsContainer.innerHTML = errorMessage("Error: Unable to load the given Rick and Morty character");
  } finally {
    console.log("Loading complete");
  }
}

getCharacter();

const detailsContainer = document.querySelector(".details-container");

function makeHtml(character) {
  detailsContainer.innerHTML = `
                      <div class="details-character-container">
                        <h1>${character.name}</h1>
                        <img src="${character.image}">
                        <div class="details-text"><b>Gender:</b> ${character.gender}</div>
                        <div class="details-text"><b>Origin:</b> ${character.origin.name}</div>
                        <div class="details-text"><b>Location:</b> ${character.location.name}</div>
                        <div class="details-text"><b>Species:</b> ${character.species}</div>
                        <div class="details-text"><b>Status:</b> ${character.status}</div>
                        <div class="details-text"><b>Appear in:</b> ${character.episode.length} episodes</div>                         
                      </div>`;
}
