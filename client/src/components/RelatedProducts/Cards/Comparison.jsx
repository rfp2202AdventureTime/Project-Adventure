import { React } from 'react';
import styled from 'styled-components';
import { useFeature } from './FeatureContext';

// should get an array with two arrays of features from each item
function Comparison() {
  const twoProductsArray = useFeature();

  if (twoProductsArray) {
    const item1 = twoProductsArray.data[0].data;
    const item2 = twoProductsArray.data[1].data;

    const FeatArray = item1.features.concat(item2.features);


    const item1Array = [];
    item1.features.map((item) => item1Array.push(item));

    const item2Array = [];
    item2.features.map((item) => item2Array.push(item));

    return (
      <table>
        <thead>
          <tr>
            <th>{item1.name}</th>
            <th> </th>
            <th>{item2.name}</th>
          </tr>
        </thead>
        <tbody>
          {FeatArray.map((item, key) => (
            <tr key={key}>

              <Xfeature>{item1Array.map((item1) => (item1.feature === item.feature ? 'X' : ' '))}</Xfeature>

              <td>{item.value ? `${item.feature}: ${item.value}` : `${item.feature}`}</td>

              <Xfeature>{item2Array.map((item2) => (item2.feature === item.feature ? 'X' : ' '))}</Xfeature>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const Xfeature = styled.td`
  position: flex;
  text-align: center;
`;
export default Comparison;
