import React, { useState } from "react";
import "./trainer.css";
import pokeballButton from "../../components/pokeballButton";

 function TrainerPage() {
  
  const [nickname, setNickname] = useState("Professor");
  const [pokemonCount, setPokemonCount] = useState(3);
  const [badges] = useState(5);
  const trainer = {
    name: "Anderson",
    age: 33,
  };
  
  return (
    <div className="main-bg">
    <div className="container">
      <h1>Treinador Pokémon</h1>

      <div className="card">
        <p><strong>Nome:</strong> {trainer.name}</p>

        <p>
          <strong>Nickname:</strong>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </p>

        <p><strong>Idade:</strong> {trainer.age}</p>
        <p><strong>Pokémons:</strong> {pokemonCount}</p>
        <p><strong>Insigneas:</strong> {badges}</p>
        {pokeballButton("ditto")}
        {pokeballButton("magmar")}
        {pokeballButton("tentacool")}

      </div>
      <div className="container">


      </div>
</div>
      
    </div>
  );
}

export default TrainerPage;