import { GiBrain, GiFallingLeaf, GiFallingRocks, GiFlamer, GiGhost, GiHeavyLightning, GiPunch, GiWaterDrop } from "react-icons/gi";
import './pokecard.css';

function PokeCard(myPokemon) {
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
    return (
        <div className={`pokemon-card ${myPokemon.tipo}`}>
            <h3>{myPokemon.name}</h3>
            <img src={myPokemon.img} alt={myPokemon.name} />
            {iconMap[myPokemon.tipo]}{" "}
            <p>{myPokemon.tipo}</p>
            <p>{"HP  " + myPokemon.hp + " " + "ATK " + myPokemon.atk}</p>
        </div>
    )
}
export default PokeCard;