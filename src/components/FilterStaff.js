function FilterStaff(props) {
    const handleStaff = (event) => {
        props.handleInput({
            key: "staff",
            value: event.currentTarget.checked
        })

    }

    return (
        <label className="label-input">Es personal de servicios
            <input
                type="checkbox"
                name="staff"
                checked={props.searchStaff}
                onChange={handleStaff}>

            </input>
        </label>
    )
}
export default FilterStaff;