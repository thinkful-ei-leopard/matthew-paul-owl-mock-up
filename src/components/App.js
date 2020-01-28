import React from 'react';
import '../styles/App.css';
import ParticipantList from './ParticipantList';
import ChatLog from './ChatLog';
import Stage from './Stage';

function App(props) {
  return (
    <div className="App">
      <ParticipantList participants={props.participants} />
      <ChatLog chatEvents={props.chatEvents} />
      <Stage participants={props.participants} />
    </div>
  );
}

export default App;
