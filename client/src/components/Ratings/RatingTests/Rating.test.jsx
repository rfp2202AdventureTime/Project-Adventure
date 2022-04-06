import React from 'react';
// import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import RatingList from '../RatingBreakdown/RatingList';

// eslint-disable-next-line no-undef
test('renders correctly', () => {
  const tree = renderer.create(<RatingList />).toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});
