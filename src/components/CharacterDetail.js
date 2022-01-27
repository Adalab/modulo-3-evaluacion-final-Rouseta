import { Link } from "react-router-dom";
import hp from "../images/HPGafas.jpg";
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
    //No me ha dado tiempo, pero de haberlo tenido habría puesto aquí los ifs, para que me saliera el enblema de cada casa, en su lugar he puesto iconos genéricos, pero es algo que mejoraré.

    return (
        <section className="result_details">
            <div className="link-back">
                <Link to="/"> Volver al inicio</Link>
            </div>
            <h2 className="subtitle"> Detalle del mago o maga</h2>
            <img
                className="card__img"
                src={props.wizard.image || hp}
                alt={`Foto de ${props.wizard.name}`}
                title={`Foto de ${props.wizard.name}`}
            />

            <h4 className="card_title">{props.wizard.name}</h4>
            <section className="card_details">
                <p className="card_status"><i className="fas fa-heartbeat"></i>
                    {props.wizard.alive}
                    {deadOrAlive()}
                </p>
                <p className="card_specie"><i className="fas fa-pastafarianism"></i>{getSpecie()}</p>
                <p className="card_gender"><i className="fas fa-venus-mars"></i> {getGender()}</p>
                <p className="card_house"><i className="fab fa-fort-awesome-alt"></i>{props.wizard.house}</p>
                <p className="card_alternate">{props.wizard.alternate}</p>
            </section>
        </section >
    );
}
export default CharacterDetail;
