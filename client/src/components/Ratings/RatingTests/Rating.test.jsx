/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import FactorEntry from '../RatingBreakdown/FactorEntry';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});



// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders with or without a name', () => {
//   act(() => {
//     render(<FactorEntry />, container);
//   });
//   expect(container.textContent).toBe('');

//   act(() => {
//     render(<FactorEntry factor="size" />, container);
//   });
//   expect(container.textContent[0]).toBe('Too small');
// });
