import "../styles/App.scss";

import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail"

const App = () => {
  const [wizards, setWizards] = useState([]);
  const [searchWizard, setSearchWizard] = useState("");
  const [searchByHouse, setSearchByHouse] = useState("Gryffindor");
  const [searchByGender, setSearchByGender] = useState("all")
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
    } else if (data.key === 'gender') {
      setSearchByGender(data.value)
    }
  };

  const filteredWizards = wizards
    .filter((oneWizard) => {
      return oneWizard.name.toLowerCase().includes(searchWizard.toLowerCase());
    })
    .filter((oneWizard) => {
      return oneWizard.house === searchByHouse;
    }).
    filter((oneWizard) => {


      // return oneWizard.gender === "all" ? true : oneWizard.gender === searchByGender
      if (searchByGender === "all") {
        return true;
      } else {
        return oneWizard.gender === searchByGender;
      }

    });

  const renderWizardDetail = (props) => {
    const routeId = props.match.params.wizardId;
    const foundWizard = wizards.find((wizard) => wizard.id === routeId);
    return <CharacterDetail wizard={foundWizard} />

  }

  return (
    <>
      <header>
        <h1> Listado de personajes de la saga de Hary Potter</h1>
      </header>
      <Switch>
        <Route path="/" exact>
          <div>
            <Filters
              handleInput={handleInput}
              wizards={wizards}
              searchByHouse={searchByHouse}
              searchWizard={searchWizard}
              searchByGender={searchByGender}
              filteredWizards={filteredWizards}
            />
            <CharacterList wizards={filteredWizards} />
          </div>
        </Route >
        <Route path="/wizard/:wizardId" render={renderWizardDetail} />

      </Switch>
      <footer>&copy; Rouseta 2021</footer>
    </>
  );
};

export default App;
