import Individualcard from '../Individualcard';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Individualcard />).toJSON();
  expect(tree).toMatchSnapshot();
});

