import React, { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService';
import PropTypes from 'prop-types';

const PokemonSelection = props => {
  const [pokemons, setPokemons] = useState([]);

  // effect equivalent to componentDidMount - runs only during the mounting phase
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    setPokemons(await PokemonService.fetchPokemons());
  };

  const getValue = url => {
    const parts = url.split('/');

    return parts[parts.length - 2];
  };

  //console.log(props.isDangerous)
  return (
    <select
      onChange={({ target: { value }}) => props.handlePokemonSelection(value)}
      value={props.currentPokemon}
      style={{ backgroundColor: props.isDangerous ? 'red': 'white' }}
    >
      {
        pokemons.map((pokemon, idx) => {
          return (
            <option
              key={idx}
              value={getValue(pokemon.url)}
            >
              {pokemon.name}
            </option>
          );
        })
      }
    </select>
  );
};

PokemonSelection.propTypes = {
  handlePokemonSelection: PropTypes.func.isRequired,
  currentPokemon: PropTypes.string,
  isDangerous: PropTypes.bool
};

export default PokemonSelection;