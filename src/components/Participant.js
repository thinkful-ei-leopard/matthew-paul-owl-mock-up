import React from 'react';

function Participant(props) {
  let sessionClass = props.inSession ? 'online' : 'offline';
  let stageClass = props.onStage ? 'onStage' : 'hidden';
  return (
    <div className="Participant">
      <img className="Participant-Avatar"  src={props.avatar} alt="Avatar" />
      <span className="Participant-Name">{props.name}</span>
      <div className={sessionClass}></div>
      <span className={stageClass}></span>
    </div>
  );
}

export default Participant;