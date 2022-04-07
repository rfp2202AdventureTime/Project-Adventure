import React from 'react';
import styled from 'styled-components';
import sampleFeatures from './sampleFeatures';
import Features from './Features';

const Testing = styled.div`
  border-style: solid;
  height: max-content;
  width: max-content;
`;

// function Comparison() {
//   return (

//   );
// }

function Comparison() {
  return (
    <Testing>
      <Features features={sampleFeatures} />
      <table>
        <tr>
          <th>item1</th>
          <th> </th>
          <th>Compare</th>
          <th> </th>
          <th>item2</th>
        </tr>
        <tr>
          <td>checkmark </td>
          <td> </td>
          <td> thing1</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>checkmark </td>
          <td> </td>
          <td> thing2</td>
          <td> </td>
          <td>checkmark</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> thing3</td>
          <td> </td>
          <td>checkmark </td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> thing4</td>
          <td> </td>
          <td> </td>
        </tr>
      </table>
    </Testing>

  );
}

export default Comparison;
