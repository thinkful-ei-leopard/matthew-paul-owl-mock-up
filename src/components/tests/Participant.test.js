import React from 'react';
import ReactDOM from 'react-dom';
import Participant from '../Participant';
import renderer from 'react-test-renderer'; 

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Participant key='test1'
  name='test'
  avatar='https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'
  inSession={true}
  onStage={true}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<Participant key='test2'
      name='test'
      avatar='test'
      inSession={true}
      onStage={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });