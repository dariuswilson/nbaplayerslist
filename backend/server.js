const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());

app.get("/teams", (req, res) => {
  // http://localhost:4000/teams
  fs.readFile(
    "/Users/16303/Desktop/Projects/Project1/backend/team_player.json",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json(JSON.parse(data));
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
