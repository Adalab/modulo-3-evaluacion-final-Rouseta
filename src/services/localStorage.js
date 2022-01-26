// Fichero src/services/localStorage.js


const get = (key, defaultData) => {
    const data = localStorage.getItem(key);
    if (data === null) {
        return defaultData;
    } else {
        return JSON.parse(data);
    }
};

// Función que guarda una propiedad y su valor en el local storage
const set = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
};





const objectToExport = {
    get: get,
    set: set,

};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;