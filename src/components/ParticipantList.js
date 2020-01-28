import React from "react";
import Participant from "./Participant";

function ParticipantList(props) {
  let inSession = props.participants.filter(person => person.inSession);
  let offSession = props.participants.filter(person => !person.inSession);
  return (
    <div className="Participant-List">
      <div className="inSession">
        {inSession.map(person =>
          <Participant
            key={person.id}
            name={person.name}
            avatar={person.avatar}
            inSession={person.inSession}
            onStage={person.onStage}
          />
        )}
      </div>
      <div className="outSession">
        {offSession.map(person =>
          <Participant
            key={person.id}
            name={person.name}
            avatar={person.avatar}
            inSession={person.inSession}
            onStage={person.onStage}
          />
        )}
      </div>
    </div>
  );
}

export default ParticipantList;
