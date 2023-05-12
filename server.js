const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.get('/teams', (req, res) => { // http://localhost:3000/teams
  fs.readFile('/Users/16303/Desktop/Projects/Project1/team_player.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data);
    // res.json(data); // why not this?
    res.json(JSON.parse(data)); // why this?
  });
})

app.get('/dog', (req, res) => { // http://localhost:3000/dog
    res.send('Woof!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
