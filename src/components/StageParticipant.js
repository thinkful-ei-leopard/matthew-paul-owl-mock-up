import React from "react";

function StageParticipant(props) {
  return (
    <div className="stage-participant">
      <div className="participant-info-container">
        <span className="participant-name">{props.name}</span>
      </div>
      <img className="stage-avatar" alt="avatar" src={props.avatar} />
    </div>
  );
}

export default StageParticipant;
