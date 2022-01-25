import "../styles/App.scss";

import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const App = () => {
  const [wizard, setWizard] = useState([]);
  const [searchWizard, setSearchWizard] = useState("");
  const [searchbyHouse, setSearchByHouse] = useState("");

  useEffect(() => {
    callToApi().then((wizardsData) => {
      setWizard(wizardsData);
    });
  }, []);
  //Función que maneja los inputs
  const handleInput = (data) => {
    if (data.key === "name") {
      setSearchWizard(data.value);
    } else if (data.key === "house") {
      setSearchByHouse(data.value);
    }
  };



  return (
    <>
      <h1> Listado de personajes de la saga de Hary Potter</h1>
      <Filters handleInput={handleInput} />
      <CharacterList />


    </>
  );
};

export default App;
