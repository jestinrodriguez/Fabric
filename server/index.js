const express = require("express");
const app = express();
const axios = require("axios");
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());

// cors connection
app.use(cors());

// db schema and connection

// please update the values with your own values
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Database123!",
  database: "recordsdatabase",
  multipleStatements: true,
});

//getting data from API

app.get("/getData", async (req, res) => {
  const key = req.query.num;
  if (key === "1") {
    api = "http://www.omdbapi.com/?s=Matrix&apikey=720c3666";
  } else if (key === "2") {
    api = "http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666";
  } else if (key === "3") {
    api = "http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666";
  } else {
    console.error("INVALID KEY");
  }

  await axios
    .get(api)
    .then((response) => {
      if (!response.data) {
        console.error("No data FOUND");
        return;
      }
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

//storing data in MYSQL DB
app.post("/create", (req, res) => {
  const imdbID = req.body.imdbID;
  const Title = req.body.Title;
  const Year = req.body.Year;
  const Type = req.body.Type;
  const Poster = req.body.Poster;

  // SQL query
  db.query(
    "INSERT IGNORE records (imdbID, Title, Year, Type) VALUES (?,?,?,?)",
    [imdbID, Title, Year, Type],
    (err, result) => {
      if (err) throw err;
      db.query(
        "INSERT IGNORE into posters(imdbID,poster) VALUES(?,?)",
        [imdbID, Poster],
        (err, result) => {
          if (err) throw err;
          res.send("values inserted");
        }
      );
    }
  );
});

//port
app.listen(3500, () => {
  console.log("Server is listening on PORT 3500");
});
