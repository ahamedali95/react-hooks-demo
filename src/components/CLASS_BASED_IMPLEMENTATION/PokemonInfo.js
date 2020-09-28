import React, { Component } from 'react';
import PokemonService from '../services/PokemonService';
import PropTypes from 'prop-types';

class PokemonInfo extends Component {
  static propTypes = {
    currentPokemon: PropTypes.string,
    isDangerous: PropTypes.bool
  };

  state = {
    pokemonInfo: {}
  };

  componentDidMount() {
    this.fetchPokemonInfo();
  }

  async fetchPokemonInfo() {
    const data = await PokemonService.fetchPokemonInfo(this.props.currentPokemon);

    this.setState({
      pokemonInfo: data
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.currentPokemon !== nextProps.currentPokemon ||
      this.state.pokemonInfo.id !== nextState.pokemonInfo.id;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.currentPokemon !== prevProps.currentPokemon) {
      this.fetchPokemonInfo();
    }
  }

  componentWillUnmount() {
    console.log('cleaning up...')
  }

  render() {
    console.log('pokemonInfo rendering....');
    return (
     <>
       <div>
         <br />
         <strong>BIO</strong>
         <br />
         <label>Name: </label>
         <label>{this.state.pokemonInfo.name}</label>
         <br />
         <label>Height: </label>
         <label>{`${this.state.pokemonInfo.height} inches`}</label>
         <br />
         <label>Weight: </label>
         <label>{`${this.state.pokemonInfo.weight} pounds`}</label>
         <br />
         <label>Top 3 powers:</label>
         <ol>
           {
             this.state.pokemonInfo.moves &&
              this.state.pokemonInfo.moves.slice(0, 3).map((pokemon, idx) => (<li key={idx}>{pokemon.move.name}</li>))
           }
         </ol>
         <img src={this.state.pokemonInfo.sprites && this.state.pokemonInfo.sprites.front_default} alt={"front view not found"} />
         <img src={this.state.pokemonInfo.sprites && this.state.pokemonInfo.sprites.back_default} alt={"back view not found"} />
       </div>
     </>
   );
  }
}

export default PokemonInfo;