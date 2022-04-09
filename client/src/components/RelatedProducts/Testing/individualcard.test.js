import renderer from 'react-test-renderer';
import Individualcard from '../Cards/Individualcard';

test('renders correctly', () => {
  const tree = renderer.create(<Individualcard />).toJSON();
  expect(tree).toMatchSnapshot();
});

