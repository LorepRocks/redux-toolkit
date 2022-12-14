import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`
    );
    const data = await res.json();
    console.log(data);
    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1,
      })
    );
  };
};
