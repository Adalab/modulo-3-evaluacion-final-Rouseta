import { Link } from "react-router-dom";
import dementor from "../images/dementor.jpg";
import "../styles/components/CharacterDetails.scss";


function CharacterDetail(props) {
    const getSpecie = () => {
        if (props.wizard.specie === "human") {
            return "Humano";
        } else if (props.wizard.specie === "werewolf") {
            return "Hombre-lobo";
        } else if (props.wizard.specie === "half-giant") {
            return "Mitad gigante";
        } else if (props.wizard.specie === "Owl") {
            return "Búho";
        }
    };

    const deadOrAlive = () => {
        return props.wizard.status === true ? "Vivo/a" : "Muerto/a";
    };

    const getGender = () => {
        return props.wizard.gender === "female" ? "Mujer" : "Hombre";
    };

    console.log(props);
    return (
        <section className="result_details">
            <div className="link-back">
                <Link to="/"> Volver al inicio</Link>
            </div>
            <h2 className="subtitle"> Detalle del mago o maga</h2>
            <img
                className="card__img"
                src={props.wizard.image || dementor}
                alt={`Foto de ${props.wizard.name}`}
                title={`Foto de ${props.wizard.name}`}
            />

            <h4 className="card_title">{props.wizard.name}</h4>
            <section className="card_details">
                <p className="card_status">
                    {props.wizard.alive}
                    {deadOrAlive()}
                </p>
                <p className="card_specie">{getSpecie()}</p>
                <p className="card_gender"></p> {getGender()}
                <p className="card_house">{props.wizard.house}</p>
                <p className="card_alternate">{props.wizard.alternate}</p>
            </section>
        </section>
    );
}
export default CharacterDetail;
