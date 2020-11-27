

class Bands {
    constructor() {
        this.bands = [];
    }

    add(band = new Band()) {
       this.bands.push(band);
    }

    get() {
        return this.bands;
     }

     del( id = '') {
         this.bands = this.bands.filter(band => band.id !== id);
         return this.bands;
     }

     vote(band = new Band()) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.vote++;
            }

            return band;
        });
     }
 }

module.exports = Bands;