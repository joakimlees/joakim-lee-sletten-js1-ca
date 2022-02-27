import getRequest from "./components/api.js";
import displayHtml from "./components/displayHtml.js";

const url = "https://rickandmortyapi.com/api/character";

const characterContainer = document.querySelector(".character-container");

const charactersResult = await getRequest(url);

/*
const characterResults = charactersResult.results;
*/

displayHtml(charactersResult, characterContainer, addCharacters);

/*
Makes html for each character. adding them on as it loops +=.
*/
function addCharacters(characters) {
  characters.results.forEach((character) => {
    characterContainer.innerHTML += `<a href="/html/details.html?id=${character.id}">
                                        <div class="character-card">
                                          <div><img src="${character.image}"></div>  
                                          <h2>${character.name}</h2>
                                          <div><b>Status: </b> ${character.status}</div>
                                          <div><b>Origin: </b> ${character.origin.name}</div>
                                        </div>
                                      </a>`;
  });
}
