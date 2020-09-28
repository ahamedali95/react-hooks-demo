import React, { useState, useEffect, memo } from 'react';
import PokemonService from '../services/PokemonService';
import PropTypes from 'prop-types';

const PokemonInfo = props => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  /*
    This effect corresponds to componentDidMount, componentDidUpdate and componentWillUnmount. The effect will run during the
    mounting phase, and during each subsequent render but this is controlled. It is said to run during subsequent renders if and only if
    `currentPokemon` changes, i.e., when a new pokemon character is selected. Before running the effect on subsequent renders,
    it performs a cleanup. In addition, the clean up process runs after the component is officially removed from the DOM.
  */
  useEffect(() => {
    fetchPokemonInfo();

    //return () => console.log("cleaning up...")
  }, [props.currentPokemon]);

  const fetchPokemonInfo = async () => {
    setPokemonInfo(await PokemonService.fetchPokemonInfo(props.currentPokemon));
  };

  //console.log('rendering');

  return (
    <>
      <div>
        <br />
        <strong>BIO</strong>
        <br />
        <label>Name: </label>
        <label>{pokemonInfo.name}</label>
        <br />
        <label>Height: </label>
        <label>{`${pokemonInfo.height} inches`}</label>
        <br />
        <label>Weight: </label>
        <label>{`${pokemonInfo.weight} pounds`}</label>
        <br />
        <label>Top 3 powers:</label>
        <ol>
          {
            pokemonInfo.moves &&
              pokemonInfo.moves.slice(0, 3).map((pokemon, idx) => (<li key={idx}>{pokemon.move.name}</li>))
          }
        </ol>
        <img src={pokemonInfo.sprites && pokemonInfo.sprites.front_default} alt={"front view not found"} />
        <img src={pokemonInfo.sprites && pokemonInfo.sprites.back_default} alt={"back view not found"} />
      </div>
    </>
  );
};

PokemonInfo.propTypes = {
  currentPokemon: PropTypes.string,
  isDangerous: PropTypes.bool
};

/*
  React.memo(hoc) mimics the functionality of shouldComponentUpdate with a slight catch. Here, subsequent renders are only
  allowed whenever there is an update to the `currentPokemon` part of the props. If there are any change to other props,
  the component will use the last memoized values and will not rerender. This slightly differs from
  shouldComponentUpdate, that is React.memo will still rerender the component when there any updates to the component's local state.
  Moreover, notice the comparison logic is inverse when compared to shouldComponentUpdate.
*/
const areEqual = (currentProps, nextProps) => {
  return currentProps.currentPokemon === nextProps.currentPokemon;
};

export default memo(PokemonInfo, areEqual);