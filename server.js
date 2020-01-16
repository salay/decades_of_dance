const express = require('express');
const app = express();
// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const DB = require('./models');

const twentiesDecade = {
    decade_name: 'Twenties',
    dates: '1920-1929',
    description: 'the roaring 20s of the past'
}

const thisDecade = {
    decade_name: 'twentyTwenties',
    dates: '2020-2029',
    description: 'holy crap we\'re in the 20\'s again!'
}

DB.Decade.create(twentiesDecade, (err, savedDecade) => {
    if(err){
        return console.log(err);
    }
    console.log(`saved a decade: ${savedDecade}`);
})

DB.Decade.create(thisDecade, (err, savedDecade) => {
    if(err){
        return console.log(err);
    }
    console.log(`saved a decade: ${savedDecade}`);
})

