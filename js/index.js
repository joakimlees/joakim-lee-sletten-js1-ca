import getRequest from "./components/api.js";
import errorMessage from "./components/error.js";

const url = "https://rickandmortyapi.com/api/character";

const characterContainer = document.querySelector(".character-container");

const charactersResult = await getRequest(url);

if (charactersResult.hasOwnProperty(`error`)) {
  characterContainer.innerHTML = errorMessage("Error: " + charactersResult.error);
} else {
  characterContainer.innerHTML = "";
  addCharacters(charactersResult.results);
}

function addCharacters(characters) {
  characters.forEach((character) => {
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
