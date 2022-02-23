// https://rickandmortyapi.com/documentation#character

const url = "https://rickandmortyapi.com/api/character/";

const characterContainer = document.querySelector(".character-container");

async function getApi() {
  const response = await fetch(url);
  const result = await response.json();
  const characters = result.results;
  console.log(result);
  addCharacters(characters);
  console.log(characters);
}

getApi();

function addCharacters(character) {
  character.forEach((character) => {
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
