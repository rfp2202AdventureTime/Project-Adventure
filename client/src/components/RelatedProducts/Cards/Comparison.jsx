/* eslint-disable no-restricted-syntax */
import { React } from 'react';
import styled from 'styled-components';

// Receives two product arrays
function Comparison({ twoProducts }) {
  if (twoProducts) {
    const item1 = twoProducts[0];
    const item2 = twoProducts[1];

    // Creates an array with all the features
    const FeatArray = item1.features.concat(item2.features);

    // Creates a unique set of features
    const features = [];
    for (let i = 0; i < FeatArray.length; i += 1) {
      if (features.indexOf(FeatArray[i].feature) === -1) {
        features.push(FeatArray[i].feature);
      }
    }

    // Creates two separate arrays with only the features
    const item1Array = [];
    item1.features.map((item) => item1Array.push(item));

    const item2Array = [];
    item2.features.map((item) => item2Array.push(item));

    return (
      <table>
        <thead>
          <tr>
            <HeadL>{item1.name}</HeadL>
            <th> </th>
            <HeadR>{item2.name}</HeadR>
            <th> </th>
          </tr>
        </thead>
        <tbody>

          {features.map((item, key) => (
            <tr key={key}>
              <XfeatureL>
                {item1Array.map((item1) => (
                  (item1.feature === item)
                    ? (item1.value)
                      ? `${item1.value}`
                      : '✓'
                    : ' '
                ))}
              </XfeatureL>

              <Value>{item}</Value>

              <XfeatureR>
                {item2Array.map((item2) => (
                  (item2.feature === item)
                    ? (item2.value)
                      ? `${item2.value}`
                      : '✓'
                    : ' '
                ))}

              </XfeatureR>

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const XfeatureL = styled.td`
  position: flex;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  font-style: italic;
  color: ${(props) => props.theme.colors.primary};
`;

const XfeatureR = styled.td`
  position: flex;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  font-style: italic;
  color: ${(props) => props.theme.colors.primary};
`;

const Value = styled.td`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  `;

const HeadL = styled.th`
  padding-left: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

const HeadR = styled.th`
  padding-right: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export default Comparison;
