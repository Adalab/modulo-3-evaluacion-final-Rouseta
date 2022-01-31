function FilterAlphabet(props) {
    const handleAlphabet = (event) => {
        props.handleInput({
            key: "alphabet",
            value: event.currentTarget.checked
        }

        )


    }

    return (
        <label className="label-input">Ordena alfabéticamente
            <input
                type="checkbox"
                name="alphabet"
                checked={props.filterByAlphabet}
                onChange={handleAlphabet}>

            </input>
        </label>

    )
}
export default FilterAlphabet;