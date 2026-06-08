import React, { useState, useEffect } from "react";
import "./pokemon.css";
import { GiBrain, GiFallingLeaf, GiFallingRocks, GiFlamer, GiGhost, GiHeavyLightning, GiPunch, GiWaterDrop } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useFetchPokeapi from "../../hooks/useFetchPokeapi";
import Evolutions from "../../components/evolutions";
import PokeCard from "../../components/pokecard";
function Pokemon() {
  console.log("iniciando construção da pagina");

  const poke = useParams();

  const { myPokemon, loading, error } = useFetchPokeapi(poke.id);
  if (loading) return <div className="loader">Carregando Pokemon...</div>;
  if (error) return <div className="error">ocorreu um erro ineperado</div>;
  return (
    <div className="pokemon">
      <h1>Poke card</h1>
      <div className="pokemon-container">
        {PokeCard(myPokemon)}
        {Evolutions(myPokemon.evolution_chain[0], myPokemon.evolution_chain[1], myPokemon.evolution_chain[2])}
      </div>
    </div>
  );
}

export default Pokemon;
