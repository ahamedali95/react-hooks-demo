import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonService from '../services/PokemonService';

class PokemonSelection extends Component {
  static propTypes = {
    handlePokemonSelection: PropTypes.func.isRequired,
    currentPokemon: PropTypes.string,
    isDangerous: PropTypes.bool
  };

  state = {
    pokemons: []
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const data = await PokemonService.fetchPokemons();

    this.setState({
      pokemons: data
    });
  }

  static getValue(url) {
    const parts = url.split('/');

    return parts[parts.length - 2];
  }

  render() {
    return (
      <select
        onChange={({ target: { value }}) => this.props.handlePokemonSelection(value)}
        value={this.props.currentPokemon}
        style={{ backgroundColor: this.props.isDangerous ? 'red': 'white' }}
      >
        {
          this.state.pokemons.map((pokemon, idx) => {
            return (
              <option
                key={idx}
                value={PokemonSelection.getValue(pokemon.url)}
              >
                {pokemon.name}
              </option>
            );
          })
        }
      </select>
    );
  }
}

export default PokemonSelection;