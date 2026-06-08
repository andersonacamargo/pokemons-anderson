import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./trainer.css";

 function TrainerPage() {
  
  const [pokemonCount, setPokemonCount] = useState(3);
  const [badges] = useState(5);

  const trainer = {
    name: "Anderson Camargo",
    age: 12,
    nickname: "Tim"
  };

  return (
    <div className="main-bg">
    <div className="container">
      <h1>Treinador Pokémon</h1>

      <div className="card">
        <p><strong>Nome:</strong> {trainer.name}</p>
        <p><strong>Nick:</strong> {trainer.nickname}</p>
        <p><strong>Idade:</strong> {trainer.age}</p>
        <p><strong>Pokémons:</strong> {pokemonCount}</p>
        <p><strong>Insigneas:</strong> {badges}</p>
        <Link to="/pokemon"> pokemon </Link>
      </div>



      </div>
    </div>
  );
}

export default TrainerPage;