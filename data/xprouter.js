const express = require('express');

const deebee = require('./db');

const routerWidget = express.Router();


routerWidget.get('/api/posts', async (reck, rez) => {
    try{
        const something = await deebee.find(reck.query);
        rez.status(200).json(something);
    }
    catch (errz) {
        console.log(errz);
        rez.status(500).json({
            disIssaMessage: 'All Your Base Belong To Me (dis bad)',
        })
    }
});

routerWidget.post('/api/posts', async (wreck, ressurection) => {
    try {
        const item = await deebee.insert(wreck.body);
        ressurection.status(201).json(item);
    }
    catch {
        ressurection.status(500).json({
            disIssaMessage: 'All Your Base Belong To Me (dis bad)',
        })
    }
});

routerWidget.get('/api/posts/:id', async (reck, rez) => {
    try{
        const something = await deebee.findById(reck.params.id);

        if(something) {
            rez.status(200).json(something);
        }
        else {
            rez.status(400).json({
                DisAlsoAMessage: 'The ability to speak does not make you intelligent'
            })
        }
    }
    catch (errz) {
        console.log(errz);
        rez.status(500).json({
            disIssaMessage: 'All Your Base Belong To Me (dis bad)',
        })
    }
});

routerWidget.delete('/api/posts/:id', async (wrecks, rocks) =>{
    try {
        let thing = await deebee.remove(wrecks.params.id);
        if (thing) {
            console.log(thing);
            rocks.status(200).json({ message: 'It Ded.  D E D ded.' });
        } else {
            console.log(thing);
            rocks.status(404).json({ message: 'NOT found !!!!' });
        }
        
    }
    catch (errz) {
        console.log(errz);
        rocks.status(500).json({
            disIssaMessage: 'All Your Base Belong To Me (dis bad)',
        })
    }
});

routerWidget.put('/api/posts/:id', async (rec, rez) => {
    try{
        let whoDoWhat = await deebee.update(rec.params.id, rec.body);
        if(whoDoWhat) {
            rez.status(200)
            //.json(whoDoWhat)
            .json({mass: 'Up Dooted!'} );
        }
        else {
            rez.status(404).json({
                superSasasasassasasasage: 'hey... that did not work...'
            })
        }
    }
    catch (errz) {
        console.log(errz);
        rocks.status(500).json({
            disIssaMessage: 'All Your Base Belong To Me (dis bad)',
        })
    }
});



module.exports = routerWidget;