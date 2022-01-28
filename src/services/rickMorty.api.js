const baseUrl = "https://rickandmortyapi.com/api/";

const RickAndMortyApi = {
  async getAllCharacters(page = 1, name = "") {
    const filterQuery = name ? `&name=${name}` : "";
    const api = await fetch(`${baseUrl}character?page=${page}${filterQuery}`);
    return await api.json();
  },
  async getCharacter(id) {
    const api = await fetch(`${baseUrl}character/${id}`);
    return await api.json();
  },
};

export default RickAndMortyApi;
