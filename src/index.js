import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import STORE from './STORE';
import './styles/index.css';

ReactDOM.render(<App participants={STORE.participants} chatEvents={STORE.chatEvents} />, document.getElementById('root'));
