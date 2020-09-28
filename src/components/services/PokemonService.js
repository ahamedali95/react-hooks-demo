import axios from 'axios';

class PokemonService {
  static BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  static async fetchPokemons() {
    try {
      const response = await axios.get(this.BASE_URL);

      return response.data.results;
    } catch (e) {
      console.log(e);

      return [];
    }
  }

  static async fetchPokemonInfo(id) {
    try {
      const response = await axios.get(this.BASE_URL + id);

      return response.data;
    } catch (e) {
      console.log(e);

      return [];
    }
  }
}

export default PokemonService;