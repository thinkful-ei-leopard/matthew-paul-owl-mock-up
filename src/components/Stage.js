import React from "react";
import StageParticipant from "./StageParticipant";
import '../styles/Stage.css'

function Stage(props) {
  return (
    <div className="Stage">
      {props.participants.map(person => (
        <StageParticipant
          key={person.id}
          name={person.name}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
}

export default Stage;
