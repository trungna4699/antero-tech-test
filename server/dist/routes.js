"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const server_1 = require("./server");
const bodyParser = require('body-parser');
// create application/json parser
const jsonParser = bodyParser.json();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const generatedNumbers = [];
const router = express.Router();
// Home page
router.get('/', (req, res, next) => {
    res.json("Reached here!");
});
router.get('/api/test', (req, res, next) => {
    const q = "SELECT * FROM bingo";
    server_1.db.query(q, (err, data) => {
        if (err)
            return res.json(err);
        return res.json(data);
    });
});
router.get('/api/nextnumber', (req, res, next) => {
    console.log(getRandomInt(1, 100));
    generatedNumbers.push(getRandomInt(1, 100));
    const q = "UPDATE bingo SET `generatednums` = '" + generatedNumbers + "' WHERE username = 'bob'";
    server_1.db.query(q, 'bob', (err, data) => {
        if (err)
            return res.json(err);
        return res.json(data);
    });
});
//
exports.default = router;
