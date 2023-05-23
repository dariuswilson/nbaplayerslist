import React from "react";

const Dropdown = ({ selectedTeam, handleTeamChange, teams }) => {
  return (
    <select value={selectedTeam} onChange={handleTeamChange}>
      <option value="">Select a team</option>
      {Object.keys(teams).map((team) => (
        <option key={team} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
