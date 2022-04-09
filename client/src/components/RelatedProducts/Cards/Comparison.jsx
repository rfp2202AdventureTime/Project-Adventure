import { React } from 'react';
import styled from 'styled-components';
// import sampleFeatures from '../sampledata/sampleFeatures';
import { useFeature } from './FeatureContext';

// should get an array with two arrays of features from each item
function Comparison() {
  // const item1 = sampleFeatures[0];
  // const item2 = sampleFeatures[1];

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

              <td>{item1Array.map((item1) => (item1.feature === item.feature ? 'X' : ' '))}</td>

              <td>{item.value ? `${item.feature}: ${item.value}` : `${item.feature}`}</td>

              <td>{item2Array.map((item2) => (item2.feature === item.feature ? 'X' : ' '))}</td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const Testing = styled.div`
  border-style: solid;
  height: max-content;
  width: max-content;
`;

const Featstyle = styled.td`
  align-items: center;
  width: max-content;
`;
export default Comparison;
