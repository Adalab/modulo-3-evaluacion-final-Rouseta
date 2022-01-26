import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse"
import "../styles/components/Filters.scss"

function Filters(props) {


    return (

        <section className="inputs">
            <h1 className="header-title__sub">Busca aquí a tu mago/a o muggle favorito/a</h1>
            <form action="" className="inputs-boxes">
                <FilterName handleInput={props.handleInput} searchWizard={props.searchWizard} />
                <FilterHouse handleInput={props.handleInput} searchByHouse={props.searchbyHouse} />


            </form>

        </section>
    )
}
export default Filters