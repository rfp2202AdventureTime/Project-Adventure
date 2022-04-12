/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import FactorEntry from '../RatingBreakdown/FactorEntry';

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

// Data Fetching
it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );