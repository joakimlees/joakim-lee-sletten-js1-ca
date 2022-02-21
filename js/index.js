// https://rickandmortyapi.com/documentation#character

const url = "https://rickandmortyapi.com/api/character";

async function getApi() {
  const response = await fetch(url);
  const result = await response.json();
  const characters = result.results;
  addCharacters(characters);
}

getApi();

function addCharacters(character) {
  character.forEach((character) => {
    console.log(character);
  });
}
