import hp from "../images/HPGafas.jpg";
import { Link } from "react-router-dom";
import "../styles/components/CharacterCard.scss";
function CharacterCard(props) {
    return (
        <Link className="link-card" to={`/wizard/${props.oneWizard.id}`}>
            <img
                className="card-picture"
                src={props.oneWizard.image || hp}
                title={props.oneWizard.name}
                alt={props.oneWizard.name}
            />
            <h4 className="name">
                Nombre: {props.oneWizard.name} de la casa de {props.oneWizard.house}
            </h4>

            <p className="race">{props.oneWizard.species} </p>
        </Link>
    );
}
export default CharacterCard;
