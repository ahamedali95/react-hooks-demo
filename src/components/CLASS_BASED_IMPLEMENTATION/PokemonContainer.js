import React, { Component, createRef } from 'react';
import PokemonSelection from './PokemonSelection';
import PokemonInfo from './PokemonInfo';

class PokemonContainer extends Component {
  #ref = createRef();

  state = {
    currentPokemon: "1",
    isDangerous: false,
    isDestroyed: false
  };

  handlePokemonSelection(value) {
    this.setState({
      currentPokemon: value
    });
  }

  handleMarkerClick(value) {
    this.setState({
      isDangerous: value
    });
  }

  handleDestroyClick() {
    this.setState({
      isDestroyed: true
    });
  }

  render() {
    let content = (
      <>
        <h2 ref={this.#ref}>Pokemon Saga</h2>
        <PokemonSelection
          currentPokemon={this.state.currentPokemon}
          handlePokemonSelection={value => this.handlePokemonSelection(value)}
          isDangerous={this.state.isDangerous}
        />
        <PokemonInfo
          currentPokemon={this.state.currentPokemon}
          isDangerous={this.state.isDangerous}
        />
        <button
          type="button"
          name="ok-marker"
          onClick={() => this.handleMarkerClick(false)}
        >
          Mark it OK!
        </button>
        <button
          type="button"
          name="dangerous-marker"
          onClick={() => this.handleMarkerClick(true)}
        >
          Mark it DANGEROUS!
        </button>
        <button
          type="button"
          name="destroy"
          onClick={() => this.handleDestroyClick()}
        >
          Destroy
        </button>
      </>
    );

    if (this.state.isDestroyed) {
      content = <h2>Destroyed!</h2>;
    }

    return content;
  }
}

export default PokemonContainer;