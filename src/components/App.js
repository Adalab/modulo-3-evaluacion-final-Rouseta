// import '../styles/App.scss';

import snape from '../images/snape.jpg'

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <h1> Listado de personajes de la saga de Hary Potter</h1>
      </header>
      <section className="inputs">
        <form action="" className="inputs-boxes">
          <label htmlFor="name" className="label-input_name">
            Busca por nombre
          </label>
          <input
            type="text"
            className="inputs-boxes_name"
            name="name"
            id="name"
          />
          <label htmlFor="houses" className="label-input_name">
            Busca por una de las cuatro casa de Hogwarts
          </label>
          <select name="houses" id="houses" className="input-boxes-name">
            <option value="all">Todas las casas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Huffelpuff">Huffelpuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>
        </form>

      </section>
      <section className="results">
        <ul className="result-cards">
          <li className="reult-card">
            <h4 className="name">Nombre: Severus Snape (Slytherin)</h4>

            <h4 className="race">Humano mestizo</h4>
            <img src={snape} title="" alt="Severus Snape" />

          </li>

        </ul>
      </section>
    </>
  );
};

export default App;
