import React from "react";

const PlayerList = ({ selectedTeam, players }) => {
  return (
    <>
      {selectedTeam && (
        <div>
          <h2>{selectedTeam} Players:</h2>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PlayerList;
