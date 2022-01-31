function FilterAlphabet(props) {
    const handleAlphabet = (event) => {
        props.handleInput({
            key: "alphabet",
            value: event.currentTarget.checked,
        })
    }

    return (
        <>
            <label htmlFor="alphabet"> Ordena alfabéticamente
                <input
                    id="alphabet"
                    type="checkbox"
                    checked={props.filterByAlphabet}
                    name="alphabet"
                    onChange={handleAlphabet}
                />
            </label>
        </>
    );
}
export default FilterAlphabet;
