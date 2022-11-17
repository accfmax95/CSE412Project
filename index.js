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

// const { Client } = require("pg");
// require("dotenv").config();

// const client = new Client({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT
// });

// client.connect(err => {
//     if (err) {
//       console.error('connection error', err.stack)
//     } else {
//       console.log('connected')
//       for(let i = 1; i <= 20; i++) {
//         getByAnimalID(i);
//       }
//       getByAnimalName("Bison bison");
//       getByAnimalsByStateName("Manipur");
//     }
// });

function printResults(rows) {
    for(let i = 0; i < rows.length; i++) {
        console.log("---------------------------------------");
        console.log("\nID: " + rows[i].animal_id);
        console.log("\nName: " + rows[i].scientific_name);
        console.log("\nLife Span: " + rows[i].life_span);
        console.log("\nPopulation: " + rows[i].population);
        console.log("\City: " + rows[i].city_name);
        console.log("\nState: " + rows[i].state_name);
    }
}

async function getByAnimalID(animalID) {

    const query = `SELECT a.animal_id, a.scientific_name, a.life_span, ad.population, c.city_name,
                    s.state_name
                    FROM Animal AS a
                    LEFT JOIN AnimalDetails AS ad
                    ON a.animal_id = ad.animal_id
                    LEFT JOIN City AS c
                    ON ad.city_id = c.city_id
                    LEFT JOIN State AS s
                    ON c.state_id = s.state_id
                    WHERE a.animal_id=$1`;
  const id = [animalID];
  return client.query(query, id, (err, res) => {
    if (err) {
        console.log("Error!  " + err.stack);
    } else {
        printResults(res.rows);
    }
    });
}

async function getByAnimalName(animal_name) {

    const query = `SELECT a.animal_id, a.scientific_name, a.life_span, ad.population, c.city_name,
                    s.state_name
                    FROM Animal AS a
                    LEFT JOIN AnimalDetails AS ad
                    ON a.animal_id = ad.animal_id
                    LEFT JOIN City AS c
                    ON ad.city_id = c.city_id
                    LEFT JOIN State AS s
                    ON c.state_id = s.state_id
                    WHERE a.scientific_name=$1`;
  const id = [animal_name];
  return client.query(query, id, (err, res) => {
    if (err) {
        console.log("Error!  " + err.stack);
    } else {
        printResults(res.rows);    }
    });
}

async function getByAnimalsByStateName(state_name) {

    const query = `SELECT a.animal_id, a.scientific_name, a.life_span, ad.population, c.city_name,
                    s.state_name
                    FROM Animal AS a
                    LEFT JOIN AnimalDetails AS ad
                    ON a.animal_id = ad.animal_id
                    LEFT JOIN City AS c
                    ON ad.city_id = c.city_id
                    LEFT JOIN State AS s
                    ON c.state_id = s.state_id
                    WHERE s.state_name=$1`;
  const id = [state_name];
  return client.query(query, id, (err, res) => {
    if (err) {
        console.log("Error!  " + err.stack);
    } else {
        printResults(res.rows);
    }
    });
}