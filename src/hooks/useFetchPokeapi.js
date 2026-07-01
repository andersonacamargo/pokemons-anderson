import { useState, useEffect } from "react";
import axios from "axios";
import { getPokemonDB, savePokemonDB } from "../utils/pokemonDB.js";

function useFetchPokeapi(pokemon) {
  console.log("iniciando construção da pagina");
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [evolutions, setEvolution] = useState({});
  const [species, setSpecies] = useState({});
  const [myPokemon, setMyPokemon] = useState({});
  const [tipo, setTipo] = useState('')

  useEffect(() => {

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          },
        );

        setPokemons(res.data);

        console.log("Success:", res.data);

      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }
    };

    const checkCache = async () => {

      const cached = await getPokemonDB(pokemon);

      if (cached) {
        console.log("encontrou cache ", cached);
        setMyPokemon(cached);
        setLoading(false);
        return { myPokemon, loading, error };
      }
      await getData();
    };

    checkCache();
  }, [pokemon]);

  useEffect(() => {
    const getSpecie = async () => {
      console.log("usesave", pokemons);

      try {
        const res = await axios.get(pokemons.species.url, {});

        setSpecies(res.data);
        console.log("Success:", res.data);
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getSpecie();
  }, [pokemons]);

  useEffect(() => {
    const getEvolution = async () => {
      console.log("useevo", species);

      try {
        const res = await axios.get(species.evolution_chain.url, {});

        setEvolution(res.data);
        console.log("Success:", res.data);
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getEvolution();
  }, [species]);

  useEffect(() => {
    const typeHandler = async () => {
      try {
        if (pokemons.types[0].type.name === 'normal' ||
          pokemons.types[0].type.name === 'fighting'
        ) { setTipo('Corpo') }
        if (pokemons.types[0].type.name === 'psychic' ||
          pokemons.types[0].type.name === 'fairy'
        ) { setTipo('Mente') }
        if (pokemons.types[0].type.name === 'dark' ||
          pokemons.types[0].type.name === 'ghost'
        ) { setTipo('Sombrio') }

        if (pokemons.types[0].type.name === 'rock' ||
          pokemons.types[0].type.name === 'metal' ||
          pokemons.types[0].type.name === 'ground'
        ) { setTipo('Terra') }
        if (pokemons.types[0].type.name === 'poison' ||
          pokemons.types[0].type.name === 'grass' ||
          pokemons.types[0].type.name === 'bug'
        ) { setTipo('Natureza') }
        if (pokemons.types[0].type.name === 'water' ||
          pokemons.types[0].type.name === 'ice'
        ) { setTipo('Agua') }
        if (pokemons.types[0].type.name === 'dragon' ||
          pokemons.types[0].type.name === 'flying' ||
          pokemons.types[0].type.name === 'electric'
        ) { setTipo('Tempestade') }
        if (pokemons.types[0].type.name === 'fire'
        ) { setTipo('Fogo') }
      }
      catch (err) {
        console.log("Ocorreu um erro no tipo")
      }
    }
    typeHandler();
  }, [pokemons]);

  useEffect(() => {
    const setPoke = async () => {
      try {
        if (evolutions.chain.evolves_to[0]) {
          if (evolutions.chain.evolves_to[0].evolves_to[0]) {
            setMyPokemon({
              tipo: tipo,
              name: pokemons.name,
              hp: pokemons.stats[0].base_stat * 10,
              atk: pokemons.stats[1].base_stat,
              img: pokemons.sprites.front_default,
              evolution_chain: [
                evolutions.chain.species.name,
                evolutions.chain.evolves_to[0].species.name,
                evolutions.chain.evolves_to[0].evolves_to[0].species.name,
              ],
            });
          } if (!evolutions.chain.evolves_to[0].evolves_to[0]) {
            setMyPokemon({
              tipo: tipo,
              name: pokemons.name,
              hp: pokemons.stats[0].base_stat * 10,
              atk: pokemons.stats[1].base_stat,
              img: pokemons.sprites.front_default,
              evolution_chain: [evolutions.chain.species.name,
              evolutions.chain.evolves_to[0].species.name,
              evolutions.chain.evolves_to[0].species.name],
            });
          }
        } else {
          setMyPokemon({
            tipo: tipo,
            name: pokemons.name,
            hp: pokemons.stats[0].base_stat * 10,
            atk: pokemons.stats[1].base_stat,
            img: pokemons.sprites.front_shiny,
            evolution_chain: [
              evolutions.chain.species.name, evolutions.chain.species.name, evolutions.chain.species.name
            ],
          });
        }
        console.log(myPokemon);
        setLoading(false);
        await savePokemonDB(myPokemon);

      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    setPoke();
  }, [evolutions, pokemons, tipo]);
  return { myPokemon, loading, error };
}

export default useFetchPokeapi;
