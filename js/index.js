// https://rickandmortyapi.com/documentation#character

const url = "https://rickandmortyapi.com/api/character";

const characterContainer = document.querySelector(".character-container");

async function getApi() {
  const response = await fetch(url);
  const result = await response.json();
  const characters = result.results;
  addCharacters(characters);
  console.log(characters);
}

getApi();

function addCharacters(character) {
  character.forEach((character) => {
    characterContainer.innerHTML += `<div><b>Name: </b>${character.name}</div>
                                      <div><b>Star in: </b> ${character.episode.length} episodes</div>
                                        <img src="${character.image}">
                                        <a href="details.html?page=${character.id}">click here</a>`;
  });
}
