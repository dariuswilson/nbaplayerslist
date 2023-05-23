import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [teams, setTeams] = useState({});
  const [selectedTeam, setSelectedTeam] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/teams")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, []);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
    setPlayers(teams[event.target.value]);
  };

  return (
    <div className="App">
      <h1>NBA Teams</h1>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">Select a team</option>
        {Object.keys(teams).map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      {selectedTeam && (
        <div>
          <h2>{selectedTeam} Players</h2>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
