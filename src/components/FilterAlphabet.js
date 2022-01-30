function FilterAlphabet(props) {
    const handleAlphabet = () => {
        return "hola"
    }
    return (
        <label htmlFor="alphabet"> Ordena alfabéticamente
            <input
                id="alphabet"
                type="checkbox"
                checked={props.filterByAlphabet}
                name="alphabet"
                onChange={handleAlphabet}
            />
        </label>
    );
}
export default FilterAlphabet;
