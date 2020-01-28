import React from "react";
import StageParticipant from "./StageParticipant";

function Stage(props) {
  return (
    <div className="stage">
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
