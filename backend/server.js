const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
const cors = require("cors");
const path = require("path");

app.use(cors());

app.get("/teams", (req, res) => {
  // http://localhost:4000/teams
  fs.readFile(path.join(__dirname, "team_player.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
