const {v4: uuid} = require('uuid');

class Band {
    constructor(nombre = 'sin nombre') {
        this.id = uuid();
        this.nombre = nombre;
        this.votes = 0;
    }
}

module.exports = Band;