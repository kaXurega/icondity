import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Snapshot test of App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});