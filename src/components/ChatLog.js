import React from "react";
import ChatMessage from "./ChatMessage";
import '../styles/ChatLog.css';

function ChatLog(props) {
  return (
    <div className="Chat-Log">
        <div className="Message-Container">
            {props.chatEvents.map(event => 
                <ChatMessage 
                key={event.timestamp}
                participantId={event.participantId}
                type={event.type}
                message={event.message}
                timestamp={event.timestamp}
                />
            )}
        </div>
        <div className="Chat-Box">
            <form id="Message-Form">
                <input type="text" placeholder="Chat"></input>
            </form>
        </div>
    </div>
  );
}

export default ChatLog;