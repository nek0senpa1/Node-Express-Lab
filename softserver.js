const express = require ('express');

const softserver = express();

softserver.use(express.json());

softserver.get('/', (reck, rez) => {
    rez.send('here is some bullshit!')
});

module.exports = softserver;