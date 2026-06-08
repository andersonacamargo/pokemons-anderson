import { Link } from "react-router-dom";
import pokeball from "../assets/pokebola.png";

function Evolutions(base, evolved, final) {
    return (<div>
        <Link to={`/pokemon/${base}`}>
            <img src={pokeball} alt={base} style={{ width: '100px' }} />
        </Link>
        <Link to={`/pokemon/${evolved}`}>
            <img src={pokeball} alt={evolved} style={{ width: '100px' }} />
        </Link>
        <Link to={`/pokemon/${final}`}>
            <img src={pokeball} alt={final} style={{ width: '100px' }} />
        </Link></div>);
}

export default Evolutions;