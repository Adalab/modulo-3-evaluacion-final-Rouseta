function FilterGender(props) {
    const handleGender = (event) => {
        props.handleInput({
            key: "gender",
            value: event.currentTarget.value
        })


    }

    return (
        <>
            <label htmlFor="gender" className="label-input">
                Busca por género
            </label>
            <select
                name="gender"
                id="gender"
                className="input-boxes-name"
                onChange={handleGender}
                value={props.searchByGender}
            >

                <option value="all">Todos</option>
                <option value="female">Ellas</option>
                <option value="male">Ellos</option>

            </select>
        </>

    )
}
export default FilterGender;