import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import STORE from './STORE';

ReactDOM.render(<App participants={STORE.participants} chatEvents={STORE.chatEvents} />, document.getElementById('root'));
