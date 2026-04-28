import React, { useState, useEffect } from 'react';
import './pokemon.css';
import { GiFlamer, GiPunch, GiWaterDrop } from "react-icons/gi";
import {  useParams } from "react-router-dom";
import useFetchPokeapi from "../../hooks/useFetchPokeapi"
function Pokemon() {
  console.log('iniciando construção da pagina')
  const iconMap = {fire: <GiFlamer color='red'/>,
                   normal: <GiPunch color='black'/>,
                   water: <GiWaterDrop color='Blue'/>
  }
  const poke = useParams();

  const {pokemons, loading, error} = useFetchPokeapi(poke.id); 
  if (loading) return <div className="loader">Carregando Pokemon...</div>;
  if (error) return <div className="error">ocorreu um erro ineperado</div>;
    return (
      
      <div className="pokemon">
        <h1>Poke card</h1>
        <div className="pokemon-container">
        <div className={`pokemon-card ${pokemons.types[0].type.name}`}>
                <h3>{pokemons.name}</h3>
                <p>tipo: {pokemons.types[0].type.name}   {iconMap[pokemons.types[0].type.name]} </p>
                <img src={pokemons.sprites.front_shiny} alt={pokemons.name} />
                <p>{pokemons.stats[0].stat.name + ' ' + pokemons.stats[0].base_stat + ' ' + pokemons.stats[1].stat.name + ' ' + pokemons.stats[0].base_stat}</p>
              </div>
        </div>
      </div>
    );
  }
  


export default Pokemon;
