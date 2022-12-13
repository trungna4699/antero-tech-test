"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const mysql = require('mysql');
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
exports.db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "antero"
});
app.use(routes_1.default);
exports.db.connect((err) => {
    if (err)
        throw err;
    console.log('MySQL Connected! here');
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Connected to server! Server listening on port: ${port}`));
