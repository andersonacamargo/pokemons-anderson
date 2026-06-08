import React, { useState, useEffect } from "react";
import "./pokemon.css";
import { GiBrain, GiFallingLeaf, GiFallingRocks, GiFlamer, GiGhost, GiHeavyLightning, GiPunch, GiWaterDrop } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useFetchPokeapi from "../../hooks/useFetchPokeapi";
import Evolutions from "../../components/evolutions";
function Pokemon() {
  console.log("iniciando construção da pagina");
  const iconMap = {
    Corpo: <GiPunch color="black" size="50px" />,
    Mente: <GiBrain color="white" size="50px" />,
    Sombrio: <GiGhost color="Purple" size="50px" />,
    Fogo: <GiFlamer color="red" size="50px" />,
    Agua: <GiWaterDrop color="Blue" size="50px" />,
    Natureza: <GiFallingLeaf color="Green" size="50px" />,
    Tempestade: <GiHeavyLightning color="Orange" size="50px" />,
    Terra: <GiFallingRocks color="Brown" size="50px" />,
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
          <img src={myPokemon.img} alt={myPokemon.name} />
          {iconMap[myPokemon.tipo]}{" "}
          <p>{myPokemon.tipo}</p>
          <p>{"HP  " + myPokemon.hp + " " + "ATK " + myPokemon.atk}</p>
        </div>
        {Evolutions(myPokemon.evolution_chain[0], myPokemon.evolution_chain[1], myPokemon.evolution_chain[2])}
      </div>
    </div>
  );
}

export default Pokemon;
