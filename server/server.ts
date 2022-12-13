import express from 'express';
const mysql = require('mysql');
import apiRouter from './routes';

const app = express();

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "antero"
}); 

app.use(apiRouter);

db.connect((err: any) => {
    if (err) throw err;
    console.log('MySQL Connected! here');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Connected to server! Server listening on port: ${port}`));

