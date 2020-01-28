import React from 'react';

function Participant(props) {
  let sessionClass = props.inSession ? 'online' : 'offline';
  let stageClass = props.onStage ? 'onStage' : 'hidden';
  let status = props.inSession ? 'in session' : 'left session';


  return (
    <div className="Participant">
      <img className="Participant-Avatar"  src={props.avatar} alt="Avatar" />
      <div className="Participant-Info">
      <span className="Participant-Name">{props.name}</span>
      <div className="Participant-Session-Status">
      <span className={sessionClass}></span>
      <span className={stageClass}>{props.onStage ? ' on stage' : status}</span>
      </div>
      </div>
    </div>
  );
}

export default Participant;