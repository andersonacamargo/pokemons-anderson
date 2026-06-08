import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPokeapi(pokemon) {
  console.log("iniciando construção da pagina");
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [evolutions, setEvolution] = useState({});
  const [species, setSpecies] = useState({});
  const [myPokemon, setMyPokemon] = useState({});
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
    getData();
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
    const setPoke = async () => {
      try {
        if (evolutions.chain.evolves_to[0].evolves_to[0] !== undefined) {
          setMyPokemon({
            tipo: pokemons.types[0].type.name,
            name: pokemons.name,
            hp: pokemons.stats[0].base_stat * 10,
            atk: pokemons.stats[1].base_stat,
            img: pokemons.sprites.front_default,
            evolution_chain: [
              evolutions.chain.evolves_to[0].species.name,
              evolutions.chain.evolves_to[0].evolves_to[0].species.name,
            ],
          });
        } else if (evolutions.chain.evolves_to[0] !== undefined) {
          setMyPokemon({
            tipo: pokemons.types[0].type.name,
            name: pokemons.name,
            hp: pokemons.stats[0].base_stat * 10,
            atk: pokemons.stats[1].base_stat,
            img: pokemons.sprites.front_default,
            evolution_chain: [evolutions.chain.evolves_to[0].species.name],
          });
        } else {
          setMyPokemon({
            tipo: pokemons.types[0].type.name,
            name: pokemons.name,
            hp: pokemons.stats[0].base_stat * 10,
            atk: pokemons.stats[1].base_stat,
            img: pokemons.sprites.front_shiny,
          });
        }
        console.log(myPokemon);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    setPoke();
  }, [evolutions, pokemons]);

  return { myPokemon, loading, error };
}

export default useFetchPokeapi;
