import pokeball from "../assets/pokebola.png";
import { Link } from "react-router-dom";


function pokeballButton  (children)  {
return <Link  to={`/pokemon/${children}`}> 
    <img src={pokeball} alt={children} style={{ width: '100px' }} />
    </Link>
        
}

export default pokeballButton
  
