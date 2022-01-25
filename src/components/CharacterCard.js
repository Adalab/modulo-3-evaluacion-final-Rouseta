// import snape from "../images/snape.jpg";
import { Link } from "react-router-dom";
function CharacterCard(props) {
    return (
        <Link to={`/user/${props.oneWizard.id}`}>
            <img
                className="card-picture"
                src={props.oneWizard.image}
                title={props.oneWizard.name}
                alt={props.oneWizard.name} />
            <h4 className="name">Nombre: {props.oneWizard.name} ({props.oneWizard.house})</h4>

            <p className="race">{props.oneWizard.species}</p>
        </Link>
    );
}
export default CharacterCard;
