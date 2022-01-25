function FilterHouse(props) {
    const handleHouse = (event) => {
        props.handleInput({

            key: "house",
            value: event.currentTarget.value
        })
    }

    return (
        <>
            <label htmlFor="houses" className="label-input">
                Busca por una de las cuatro casa de Hogwarts
            </label>
            <select name="houses" id="houses" className="input-boxes-name" onChange={handleHouse}>
                <option value="all">Todas las casas</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Huffelpuff">Huffelpuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
            </select>
        </>
    )
}
export default FilterHouse;