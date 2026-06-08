import { Link } from "react-router-dom";
import { GiBattleAxe, GiSharpAxe, GiBatteredAxe, GiWoodAxe } from "react-icons/gi";

function Evolutions(base, evolved, final) {
    return (<div >
        <Link to={`/pokemon/${base}`}>
            <button>
                <GiWoodAxe color="black" size="50px" />
            </button>
        </Link>
        <Link to={`/pokemon/${evolved}`}>
            <button>
                <GiBatteredAxe color="black" size="50px" />
            </button>
        </Link>
        <Link to={`/pokemon/${final}`}>
            <button>
                <GiBattleAxe color="black" size="50px" />
            </button>
        </Link>
    </div >);
}

export default Evolutions;