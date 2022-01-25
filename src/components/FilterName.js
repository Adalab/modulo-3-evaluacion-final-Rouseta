function FilterName(props) {
    const handleName = (event) => {
        props.handleInput({
            key: 'name',
            value: event.currentTarget.value,
        })

    }
    return (
        <>
            <label htmlFor="name" className="label-input">
                Busca por nombre
            </label>
            <input
                type="text"
                className="inputs-boxes_name"
                name="name"
                id="name"
                value={props.searchWizard}
                onChange={handleName}
            />
        </>
    );
}
export default FilterName;
