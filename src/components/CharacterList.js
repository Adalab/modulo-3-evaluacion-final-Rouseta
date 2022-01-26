import CharacterCard from "./CharacterCard";

function CharacterList(props) {
    const wizardElement = props.wizards.map((oneWizard) => {
        return (
            <li key={oneWizard.id} className="result-card">
                <CharacterCard oneWizard={oneWizard} />
            </li>
        );
    });


    return (
        <section className="results">
            <ul className="result-cards">
                {wizardElement}
            </ul>
        </section>
    );
}
export default CharacterList;
