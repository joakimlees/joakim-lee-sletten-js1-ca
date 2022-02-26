import getRequest from "./components/api.js";
import errorMessage from "./components/error.js";
import displayHtml from "./components/displayHtml.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const characterId = params.get("id");

const detailsContainer = document.querySelector(".details-container");

const specificCharacterUrl = "https://rickandmortyapi.com/api/character/" + characterId;

const specificCharacter = await getRequest(specificCharacterUrl);

displayHtml(specificCharacter, detailsContainer, makeHtml);

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
