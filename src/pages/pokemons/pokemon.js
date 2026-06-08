import React, { useState, useEffect } from "react";
import "./pokemon.css";
import { GiFlamer, GiPunch, GiWaterDrop } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useFetchPokeapi from "../../hooks/useFetchPokeapi";
import pokeballButton from "../../components/pokeballButton";

function Pokemon() {
  console.log("iniciando construção da pagina");
  const iconMap = {
    fire: <GiFlamer color="red" />,
    normal: <GiPunch color="black" />,
    water: <GiWaterDrop color="Blue" />,
  };
  const poke = useParams();

  const { myPokemon, loading, error } = useFetchPokeapi(poke.id);
  if (loading) return <div className="loader">Carregando Pokemon...</div>;
  if (error) return <div className="error">ocorreu um erro ineperado</div>;
  return (
    <div className="pokemon">
      <h1>Poke card</h1>
      <div className="pokemon-container">
        <div className={`pokemon-card ${myPokemon.tipo}`}>
          <h3>{myPokemon.name}</h3>
          <p>
            tipo: {myPokemon.tipo} {iconMap[myPokemon.tipo]}{" "}
          </p>
          <img src={myPokemon.img} alt={myPokemon.name} />
          <p>{"HP  " + myPokemon.hp + " " + "ATK " + myPokemon.atk}</p>
        </div>
        {pokeballButton(myPokemon.evolution_chain[0])}
        {pokeballButton(myPokemon.evolution_chain[1])}
      </div>
    </div>
  );
}

export default Pokemon;
