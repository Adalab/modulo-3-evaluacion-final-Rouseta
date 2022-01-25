import snape from "../images/snape.jpg"
import CharacterCard from "./CharacterCard";

function CharacterList() {




    return (

        <section className="results">
            <ul className="result-cards">
                <li className="result-card">
                    <CharacterCard />

                </li>
            </ul>
        </section>
    )



}
export default CharacterList;