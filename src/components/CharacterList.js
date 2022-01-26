import CharacterCard from "./CharacterCard";
import Error from "./Error";

function CharacterList(props) {
    const wizardElement = props.wizards.map((oneWizard) => {

        return (
            <li key={oneWizard.id} className="result-card">
                <CharacterCard oneWizard={oneWizard} />
            </li>
        );
    });

    if (props.wizards.length === 0) {
        return <Error />
    } else {
        return (
            <section className="results">
                <ul className="result-cards">
                    {wizardElement}
                </ul>
            </section>
        );
    }
}
export default CharacterList;
