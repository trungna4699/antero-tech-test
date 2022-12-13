import * as express from 'express';
import { db } from './server';

const bodyParser = require('body-parser');
// create application/json parser
const jsonParser = bodyParser.json()

function getRandomInt(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const generatedNumbers = [] as number[];

const router = express.Router();

// Home page
router.get('/', (req, res, next) => {
    res.json("Reached here!");
});

router.get('/api/test', (req, res, next) => {
    const q = "SELECT * FROM bingo";
    db.query(q, (err: any, data: any) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


router.get('/api/nextnumber', (req, res, next) => {
    console.log(getRandomInt(1,100));

    generatedNumbers.push(getRandomInt(1,100));

    const q = "UPDATE bingo SET `generatednums` = '" + generatedNumbers + "' WHERE username = 'bob'";

    db.query(q, 'bob',(err: any, data: any) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

//


export default router;