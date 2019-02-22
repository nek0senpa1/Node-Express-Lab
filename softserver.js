const express = require ('express');

const softserver = express();

softserver.use(express.json());



const routerWidgey = require('./data/xprouter');

softserver.use(routerWidgey);



softserver.get('/', (reck, rez) => {
    rez.send('here is some random bullshit!')
});




module.exports = softserver;