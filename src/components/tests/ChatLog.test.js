import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from '../ChatLog';
import STORE from '../../STORE';
import renderer from 'react-test-renderer'; 

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<ChatLog chatEvents={STORE.chatEvents}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<ChatLog chatEvents={STORE.chatEvents}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});