import { Link } from 'react-router-dom';
import dementor from "../images/dementor.jpg";

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
        return props.wizard.status === true ? "Vivo/a" : "Muerto/a"

    }

    const getGender = () => {
        return props.wizard.gender === "female" ? "Mujer" : "Hombre"
    }



    console.log(props);
    return (

        <section className='result_details'>
            <Link to="/"> Volver al inicio</Link>
            <h2>Detalle del mago o maga</h2>
            <img
                className="card__img"
                src={props.wizard.image || dementor}
                alt={`Foto de ${props.wizard.name}`}
                title={`Foto de ${props.wizard.name}`}

            />
            <h4 className="card_title">{props.wizard.name}</h4>

            <p className="card_status">{props.wizard.alive}{deadOrAlive()} </p>
            <p className="card_specie">{getSpecie()}</p>
            <p className="card gender"></p> {getGender()}
            <p className="card_house">{props.wizard.house}</p>
            <p className="card_alternate">{props.wizard.alternate}</p>




        </section>


    )

} export default CharacterDetail;