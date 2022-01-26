import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse"
import "../styles/components/Filters.scss"

function Filters(props) {


    return (

        <section className="inputs">
            <form action="" className="inputs-boxes">
                <FilterName handleInput={props.handleInput} searchWizard={props.searchWizard} />
                <FilterHouse handleInput={props.handleInput} searchByHouse={props.searchbyHouse} />


            </form>

        </section>
    )
}
export default Filters