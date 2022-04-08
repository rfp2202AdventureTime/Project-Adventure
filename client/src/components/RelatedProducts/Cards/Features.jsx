import React from 'react';
import styled from 'styled-components';

function Features({ item1, item2 }) {
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
        {FeatArray.map((item) => (
          <tr>

            <td>{item1Array.map((item1) => (item1.feature === item.feature ? 'X' : ' '))}</td>

            <td>{item.value ? `${item.feature}: ${item.value}` : `${item.feature}`}</td>

            <td>{item2Array.map((item2) => (item2.feature === item.feature ? 'X' : ' '))}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

const item1Style = styled.td`
  display: flex;
  align-items: center;
`;
export default Features;
