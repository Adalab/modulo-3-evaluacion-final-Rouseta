import "../styles/App.scss";

import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const App = () => {
  const [wizards, setWizards] = useState([]);
  const [searchWizard, setSearchWizard] = useState("");
  const [searchByHouse, setSearchByHouse] = useState("Gryffindor");
  //Llamada al Fetch
  useEffect(() => {
    callToApi(searchByHouse).then((wizardsData) => {
      setWizards(wizardsData);
    });
  }, [searchByHouse]);
  ;
  //Función que maneja los inputs
  const handleInput = (data) => {
    if (data.key === 'name') {
      setSearchWizard(data.value);
    } else if (data.key === 'house') {
      setSearchByHouse(data.value);
    }
  };

  const filteredWizards = wizards
    .filter((oneWizard) => {
      return oneWizard.name.toLowerCase().includes(searchWizard.toLowerCase());
    })
    .filter((oneWizard) => {
      return searchByHouse === "all"
        ? true
        : oneWizard.house === searchByHouse;
    });

  return (
    <>
      <header>
        <h1> Listado de personajes de la saga de Hary Potter</h1>
      </header>
      <Filters
        handleInput={handleInput}
        wizards={wizards}
        searchByHouse={searchByHouse}
        searchWizard={searchWizard}
        filteredWizards={filteredWizards}
      />
      <CharacterList wizards={filteredWizards} />
      <footer>&copy; Rouseta 2021</footer>
    </>
  );
};

export default App;
