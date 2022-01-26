import CharacterCard from "./CharacterCard";
import Error from "./Error";

function CharacterList(props) {
    const wizardSort = props.wizards;
    wizardSort.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
    });

    const wizardElement = wizardSort.map((oneWizard) => {
        return (
            <li key={oneWizard.id} className="result-card">
                <CharacterCard oneWizard={oneWizard} />
            </li>
        );
    });

    if (props.wizards.length === 0) {
        return <Error />;
    } else {
        return (
            <section className="results">
                <ul className="result-cards">{wizardElement}</ul>
            </section>
        );
    }
}
export default CharacterList;
