import React from "react";
import STORE from "../STORE";

function renderNonMessage(participant, type, timestamp) {
    let action;
    switch (type) {
        case 'thumbs-up':
            action = ' gave a thumbs up!';
            break;
        case 'thumbs-down':
            action = ' gave a thumbs down!';
            break;
        case 'raise-hand':
            action = ' raised their hand!';
            break;
        case 'clap':
            action = ' clapped!';
            break;
        case 'join':
            action = ' joined!';
            break;
        case 'leave':
            action = ' left!';
            break;
        case 'join-stage':
            action = ' joined the stage!';
            break;
        case 'leave-stage':
            action = ' left the stage!';
            break;
        default:
            action = '';
    }
  return ( 
    <div className="Chat-Action">
       <strong>{participant.name}</strong>{action}
    </div>
  );
}

function ChatMessage(props) {
  let participant = STORE.findParticipantById(props.participantId);
  if (props.type !== "message") {
    return renderNonMessage(participant, props.type, props.timestamp);
  } else {
      let date = new Date(props.timestamp);
    return (
      <div className="Chat-Entry">
        <img className="Participant-Avatar" src={participant.avatar} alt="Avatar" />
        <span className="Participant-Name">{participant.name}</span>
        <span className="Chat-Timestamp">{date.toLocaleTimeString()}</span>
        <p className="Chat-Message">{props.message}</p>
      </div>
    );
  }
}

export default ChatMessage;

/**
 * Props:
 * participantId: Number
 * type: String(message, thumbs up, thumbs down, clap, etc)
 * message: String
 * timestamp: Number of milliseconds sense epoch
 */
