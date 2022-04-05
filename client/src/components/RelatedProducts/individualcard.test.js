import Individualcard from './Individualcard';
import renderer from 'react-test-renderer';

// const ReactTestRenderer = require('react-test-renderer');

test('renders correctly', () => {
  const tree = renderer.create(<Individualcard />).toJSON();
  expect(tree).toMatchSnapshot();
});

// const renderer = ReactTestRenderer.create(
//   <ProductImg page="http://google.com" />
// );

// console.log(renderer.toJSON());
