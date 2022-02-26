// https://rickandmortyapi.com/documentation#character

/*let page = 1;

function pagination() {
  page = page + 1;
  return page;
}

const buttonNext = document.querySelector(".button-next");

buttonNext.addEventListener("click", pagination);


const url = "https://rickandmortyapi.com/api/character?page=" + page;

*/

const url = "https://rickandmortyapi.com/api/character";

const characterContainer = document.querySelector(".character-container");

async function getApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const characters = result.results;

    characterContainer.innerHTML = "";

    addCharacters(characters);
  } catch (error) {
    console.log("Unable to load Rick and Morty characters", error);
    characterContainer.innerHTML = errorMessage("Error: Unable to load Rick and Morty characters");
  } finally {
    console.log("Loading complete");
  }
}

getApi();

let characters = getRequest(url);

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
