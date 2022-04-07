import React from 'react';
import styled from 'styled-components';
import sampleFeatures from './sampleFeatures';
import Features from './Features';

const Testing = styled.div`
  border-style: solid;
  height: max-content;
  width: max-content;
`;

const Featstyle = styled.td`
  align-items: center;
  width: max-content;
`;
// function Comparison() {
//   return (

//   );
// }

function Comparison() {
  const item1 = sampleFeatures[0].name;
  const item2 = sampleFeatures[1].name;

  return (
    <Testing>
      <div>

        {/* <table>
          <tr>
            <th>{item1}</th>
            <th>Compare</th>
            <th>{item2}</th>
          </tr> */}
          {/* <Item1 item1={sampleFeatures[0]} /> */}
          <Features item1={sampleFeatures[0]} item2={sampleFeatures[1]} />





        {/* </table> */}
      </div>
    </Testing>

  );
}

export default Comparison;


// <Testing>
//       <Features features={sampleFeatures} />
//       <table>
//         <tr>
//           <th>item1</th>
//           <th> </th>
//           <th>Compare</th>
//           <th> </th>
//           <th>item2</th>
//         </tr>
//         <tr>
//           <td>checkmark </td>
//           <td> </td>
//           <td> thing1</td>
//           <td> </td>
//           <td> </td>
//         </tr>
//         <tr>
//           <td>checkmark </td>
//           <td> </td>
//           <td> thing2</td>
//           <td> </td>
//           <td>checkmark</td>
//         </tr>
//         <tr>
//           <td> </td>
//           <td> </td>
//           <td> thing3</td>
//           <td> </td>
//           <td>checkmark </td>
//         </tr>
//         <tr>
//           <td> </td>
//           <td> </td>
//           <td> thing4</td>
//           <td> </td>
//           <td> </td>
//         </tr>
//       </table>
//     </Testing>