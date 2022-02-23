// https://rickandmortyapi.com/documentation#character

const url = "https://rickandmortyapi.com/api/character";

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
    characterContainer.innerHTML += `<div class="character-card">
                                        <h2><b>Name: </b>${character.name}</h2>
                                        <div><b>Star in: </b> ${character.episode.length} episodes</div>
                                        <div><img src="${character.image}"></div>
                                        <a href="/html/details.html?id=${character.id}">click here</a>
                                      </div>`;
  });
}
