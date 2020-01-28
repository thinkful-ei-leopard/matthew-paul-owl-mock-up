import React from 'react';
import ReactDOM from 'react-dom';
import Stage from '../Stage';
import renderer from 'react-test-renderer';
import STORE from '../../STORE';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Stage participants={STORE.participants}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<Stage participants={STORE.participants}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
