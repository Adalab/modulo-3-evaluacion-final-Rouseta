import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterStudent from "./FilterStudent";
import FilterStaff from "./FilterStaff";
import FilterGender from "./FilterGender";
import FilterAlphabet from "./FilterAlphabet";
import "../styles/components/Filters.scss";

function Filters(props) {
    return (
        <section className="inputs">
            <h1 className="header-title__sub">
                Busca aquí a tu mago/a o muggle favorito/a
            </h1>
            <form action="" className="inputs-boxes">
                <FilterName
                    handleInput={props.handleInput}
                    searchWizard={props.searchWizard}
                />
                <FilterHouse
                    handleInput={props.handleInput}
                    searchByHouse={props.searchbyHouse}
                />
                <FilterGender
                    handleInput={props.handleInput}
                    searchByGender={props.searchByGender}
                />
                <FilterStudent
                    handleInput={props.handleInput}
                    searchByStudent={props.searchByStudent}
                />
                <FilterStaff
                    handleInput={props.handleInput}
                    searchByStaff={props.searchByStaff}
                />
                <FilterAlphabet
                    handleInput={props.handleInput}
                    filterByAlphabet={props.filterByAlphabet}
                />
            </form>
        </section>
    );
}

export default Filters;
