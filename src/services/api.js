// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos al API
    return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
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
                    id: `${wizard.name} ${wizard.dateOfBirth}`,
                };
            }); console.log(cleanData);
            return cleanData;
        });

};

export default callToApi;