// Fichero src/services/api.js
import { v4 as uuidv4 } from 'uuid';
const callToApi = (searchByHouse) => {
    // Llamamos al API
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${searchByHouse}`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((wizard) => {
                return {
                    name: wizard.name,
                    status: wizard.alive,
                    image: wizard.image,
                    house: wizard.house,
                    gender: wizard.gender,
                    specie: wizard.species,
                    id: uuidv4(),
                };
            });
            return cleanData;
        });

};

export default callToApi;