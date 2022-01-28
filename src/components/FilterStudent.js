

function FilterStudent(props) {
    const handleStudent = (event) => {
        props.handleInput({
            key: "student",
            value: event.currentTarget.checked

        })


    }

    return (
        <label className="label-input">Es estudiante
            <input
                type="checkbox"
                name="student"

                checked={props.searchByStudent}
                onChange={handleStudent}
            />
        </label>

    )
}

export default FilterStudent