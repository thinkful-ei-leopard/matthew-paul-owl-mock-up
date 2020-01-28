import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from '../ChatMessage';
import renderer from 'react-test-renderer'; 

/**
 * Tests for regular message
 */
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<ChatMessage key={4}
  participantId={1}
  type='message'
  message='Hello'
  timestamp={1548852544247}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * Tests for action message
 */
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<ChatMessage key={1}
    participantId={1}
    type='thumbs-up'
    timestamp={1548852544247}/>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

/**
 * Tests for regular message
 */
it('renders the UI as expected', () => {
  const tree = renderer
  .create(<ChatMessage key={2}
      participantId={1}
      type='message'
      message='Hello'
      timestamp={1548852544247}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

  /**
   * Tests for action message
   */
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<ChatMessage key={3}
        participantId={1}
        type='thumbs-up'
        timestamp={1548852544247}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });