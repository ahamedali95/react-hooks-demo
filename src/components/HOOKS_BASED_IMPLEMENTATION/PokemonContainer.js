import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PokemonSelection from './PokemonSelection';
import PokemonInfo from './PokemonInfo';
import UseCallbackExample from '../OTHER_HOOKS/UseCallbackExample';

// Remember unlike classes, functional components redefine functions inside it between renders so remember to use memoization when necessary.
// Checkout built-in hooks such as `useMemo` and `useCallback` that allows you perform memoization.
const PokemonContainer = props => {
  /*
    Reserved for useRef hook example
    useRef hook is used to create a mutable object whose current property holds reference to some DOM element where the ref is attached to.
    Use this to imperatively control a child component. Moreover, the object is preserved throughout the lifecyle of the
    component(similar to instance variables in classes). Mutating this object will not cause a rerender.
   */

  // const ref = useRef(null);
  // useEffect(() => {
  //   console.log(ref.current);
  // }, []);
  /*
    Reserved for useMemo hook example
    useMemo hook will help us memoize any expensive operations between renders. It invokes the provided callback if
    any of the dependency values changes. Since we provided an empty array, it invokes the provided callback only once, that is during
    initial mounting phase.
   */
  // const a = useMemo(() => { console.log("i am created"); }, []);
  const [currentPokemon, setCurrentPokemon] = useState("1");
  const [isDangerous, setIsDangerous] = useState(false);
  const [isDestroyed, setDestroyed] = useState(false);

  const handlePokemonSelection = value => setCurrentPokemon(value);
  /*
    Reserved for useCallback hook example
    useCallback hook will help us memoize callback functions such that it passes the same reference of callback functions
    to children components between renders. It takes an array of dependency values - if one of those values changes, then
    it will create a new function(thus new reference). In this case, we provided an empty array so there are no dependencies for React to
    compare so it returns the same function reference on each render. Use this in situations where you want to optimize your
    children components(remember, even if you have used React.memo to optimize you components, it will still rerender if callback
    handlers have different references).
   */
  //const handlePokemonSelection = useCallback(value => setCurrentPokemon(value), []);

  const handleMarkerClick = value => setIsDangerous(value);
  const handleDestroyClick = () => setDestroyed(true);

  let content = (
    <>
      <h2 ref={ref}>Pokemon Saga</h2>
      <PokemonSelection
        currentPokemon={currentPokemon}
        handlePokemonSelection={handlePokemonSelection}
        isDangerous={isDangerous}
      />
      <PokemonInfo
        currentPokemon={currentPokemon}
        isDangerous={isDangerous}
      />
      {/*Reserved for useCallback hook example*/}
      <UseCallbackExample handlePokemonSelection={handlePokemonSelection} />
      {/**/}
      <button
        type="button"
        name="ok-marker"
        onClick={() => handleMarkerClick(false)}
      >
        Mark it OK!
      </button>
      <button
        type="button"
        name="dangerous-marker"
        onClick={() => handleMarkerClick(true)}
      >
        Mark it DANGEROUS!
      </button>
      <button
        type="button"
        name="destroy"
        onClick={() => handleDestroyClick()}
      >
        Destroy
      </button>
    </>
  );

  if(isDestroyed) {
    content = <h2>Destroyed!</h2>;
  }

  return content;
};

export default PokemonContainer;

// OTHER LEAST COMMONLY USED HOOKS
//  1. useReducer
//  2. useContext
//  3. useImperativeHandle
//  4. useLayoutEffect
//  5. useDebugValue