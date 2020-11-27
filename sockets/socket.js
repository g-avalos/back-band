const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.add(new Band('MC'));
bands.add(new Band('MC1'));
bands.add(new Band('MC2'));
bands.add(new Band('MC3'));
bands.add(new Band('MC5'));


// Msgs de sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('Cliente desconectado') });

    client.emit('active-bands', bands.get());

    client.on('vote-band', (band) => {
        bands.vote(band.id);
        io.emit('active-bands', bands.get());
    });

    client.on('add-band', (band) => {
        bands.add(new Band(band.name));
        io.emit('active-bands', bands.get());
    });

    client.on('del-band', (band) => {
        bands.del(band.id);
        io.emit('active-bands', bands.get());
    });

    // client.on('msg', (payload) => { 
    //     console.log(payload);
    //     io.emit('msg', { admin: 'nuevo mensaje' })
    // });

    // client.on('emitir-msg', (payload) => { 
    //     console.log(payload);
    //     client.broadcaste.emit('nuevo-mensaje', payload)
    // });
});
