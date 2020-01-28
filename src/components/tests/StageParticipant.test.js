import React from 'react';
import ReactDOM from 'react-dom';
import StageParticipant from '../StageParticipant';
import renderer from 'react-test-renderer'; 

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<StageParticipant key='test'
  name='test'
  avatar='https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'
  />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<StageParticipant key='test'
      name='test'
      avatar='test'
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });