import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse"
import FilterGender from "./FilterGender"
import FilterAlphabet from "./FilterAlphabet";

function Filters(props) {


    return (

        <section className="inputs">
            <form action="" className="inputs-boxes">
                <FilterName handleInput={props.handleInput} searchWizard={props.searchWizard} />
                <FilterHouse handleInput={props.handleInput} searchByHouse={props.searchbyHouse} />
                <FilterGender handleInput={props.handleInput} searchByGender={props.searchByGender} />
                <FilterAlphabet filterByAlphabet={props.filterByAlphabet} />


            </form>

        </section>
    )
}
export default Filters