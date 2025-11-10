import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import PlayerList from "./components/PlayerList";
import "./App.css";

function App() {
  const [teams, setTeams] = useState({});
  const [selectedTeam, setSelectedTeam] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log({ teams });
    axios
      .get("http://localhost:4000/teams")
      .then((response) => {
        setTeams(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  });

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
    setPlayers(teams[event.target.value]);
  };

  return (
    <div className="App">
      <Header />
      <Dropdown
        selectedTeam={selectedTeam}
        handleTeamChange={handleTeamChange}
        teams={teams}
      />
      <PlayerList selectedTeam={selectedTeam} players={players} />
    </div>
  );
}

export default App;
