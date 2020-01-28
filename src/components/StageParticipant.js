import React from "react";

function StageParticipant(props) {
  return (
    <div className="Stage-Participant">
      <div className="Participant-Info-Container">
        <span className="Participant-Name">{props.name}</span>
      </div>
      <img className="Stage-Avatar" alt="avatar" src={props.avatar} />
    </div>
  );
}

export default StageParticipant;
