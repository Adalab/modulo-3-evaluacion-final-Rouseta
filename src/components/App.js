import "../styles/App.scss";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";
import Header from "./Header";

// import ls from"../services/localStorage"

const App = () => {
  const [wizards, setWizards] = useState([]);
  const [searchWizard, setSearchWizard] = useState("");
  const [searchByHouse, setSearchByHouse] = useState("Gryffindor");
  const [searchByStudent, setSearchByStudent] = useState(false);
  const [searchByStaff, setSearchByStaff] = useState(false);
  const [searchByGender, setSearchByGender] = useState("all");
  const [filterByAlphabet, setFilterByAlphabet] = useState(false);
  //Llamada al Fetch
  useEffect(() => {
    callToApi(searchByHouse).then((wizardsData) => {
      setWizards(wizardsData);
    });
  }, [searchByHouse]);
  //Función que maneja los inputs
  const handleInput = (data) => {
    if (data.key === "name") {
      setSearchWizard(data.value);
    } else if (data.key === "house") {
      setSearchByHouse(data.value);
    } else if (data.key === "student") {
      setSearchByStudent(data.value);
    } else if (data.key === "gender") {
      setSearchByGender(data.value);
    } else if (data.key === "staff") {
      setSearchByStaff(data.value);
    } else if (data.key === "alphabet") {
      setFilterByAlphabet(data.value)
    }
  };

  const filteredWizards = wizards
    .filter((oneWizard) => {
      return oneWizard.name.toLowerCase().includes(searchWizard.toLowerCase());
    })
    .filter((oneWizard) => {
      return oneWizard.house === searchByHouse;
    })
    .filter((oneWizard) => {
      if (searchByStudent === false) {
        return true;
      } else {
        return oneWizard.student;
      }
    })
    .filter((oneWizard) => {
      if (searchByStaff === false) {
        return true;
      } else {
        return oneWizard.staff;
      }
    })
    .filter((oneWizard) => {
      if (searchByGender === "all") {
        return true;
      } else {
        return oneWizard.gender === searchByGender;
      }
    }).filter((oneWizard) => {
      if (filterByAlphabet === false) {
        return true
      } else {

        return wizards.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
        });


      }

    })

  const renderWizardDetail = (props) => {
    const routeId = props.match.params.wizardId;
    const foundWizard = wizards.find((wizard) => wizard.id === routeId);
    return <CharacterDetail wizard={foundWizard} />;
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>
            <Filters
              handleInput={handleInput}
              wizards={wizards}
              searchByHouse={searchByHouse}
              searchWizard={searchWizard}
              filteredWizards={filteredWizards}
              searchByStudent={searchByStudent}
              searchByStaff={searchByStaff}
              searchByGender={searchByGender}
            />
            <CharacterList wizards={filteredWizards} />
          </div>
        </Route>
        <Route path="/wizard/:wizardId" render={renderWizardDetail} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
