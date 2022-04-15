/* eslint-disable no-restricted-syntax */
import { React } from 'react';
import styled from 'styled-components';
import { useFeature } from '../contexts/FeatureContext';

// should get an array with two arrays of features from each item
function Comparison() {
  const twoProductsArray = useFeature();

  if (twoProductsArray) {
    const item1 = twoProductsArray.data[0].data;
    const item2 = twoProductsArray.data[1].data;

    // creates an array with all the features
    const FeatArray = item1.features.concat(item2.features);

    const features = [];
    for (let i = 0; i < FeatArray.length; i += 1) {
      if (features.indexOf(FeatArray[i].feature) === -1) {
        features.push(FeatArray[i].feature);
      }
    }

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
            <th> </th>
          </tr>
        </thead>
        <tbody>

          {features.map((item, key) => (
            <tr key={key}>
              <Xfeature>
                {item1Array.map((item1) => (
                  (item1.feature === item)
                    ? (item1.value)
                      ? `${item1.value}`
                      : '✓'
                    : ' '
                ))}
              </Xfeature>

              <Value>{item}</Value>

              <Xfeature>
                {item2Array.map((item2) => (
                  (item2.feature === item)
                    ? (item2.value)
                      ? `${item2.value}`
                      : '✓'
                    : ' '
                ))}

              </Xfeature>

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

const Value = styled.td`
  text-align: center;
  `;

export default Comparison;
