/* eslint-disable no-undef */
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import FactorEntry from '../RatingBreakdown/FactorEntry';
import HighlightText from '../Review/HighlightText';

import RatingOverview from '../RatingBreakdown/RatingOverview';

// Snapshot Testing
it('RatingOverview renders correctly', () => {
  const tree = renderer
    .create(<RatingOverview />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Rendering
let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with factorBar descriptions', () => {
  act(() => {
    render(<FactorEntry factor="Size" />, container);
  });
  expect(container.textContent).toBe('Too smallPerfectToo large');

  act(() => {
    render(<FactorEntry factor="Comfort" />, container);
  });
  expect(container.textContent).toBe('PoorPerfect');
});

container = null;

it('renders the same text with keyword highlighted', () => {
  act(() => {
    render(<HighlightText
      text="Anventure Time is amazing"
      highlight="time"
    />, container);
  });
  expect(container.textContent).toBe('Anventure Time is amazing');
});

// Shallow Rendering using enzyme

it('renders with keyword highlighted', () => {
  const tree = renderer
    .create(<HighlightText
      text="Anventure Time is amazing"
      highlight="time"
    />, container)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
