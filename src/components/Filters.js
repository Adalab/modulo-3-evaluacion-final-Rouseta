import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse"

function Filters(props) {


    return (

        <section className="inputs">
            <form action="" className="inputs-boxes">
                <FilterName handleInput={props.handleInput} />
                <FilterHouse handleInput={props.handleInput} />


            </form>

        </section>
    )
}
export default Filters