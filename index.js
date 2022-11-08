import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
      getByAnimalID(1);
    }
});

async function getByAnimalID(animalID) {
  const query = `SELECT * FROM animal WHERE animal_id = $1`;
  const id = [animalID];
  return client.query(query, id, (err, res) => {
    if (err) {
        console.log("Error!  " + err.stack);
    } else {
        console.log("Result: " + JSON.stringify(res.rows));
    }
    });
}
