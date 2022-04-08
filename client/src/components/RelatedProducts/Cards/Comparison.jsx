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

function Comparison() {
  const item1 = sampleFeatures[0].name;
  const item2 = sampleFeatures[1].name;

  return (
    <Testing>
      <div>

        <Features item1={sampleFeatures[0]} item2={sampleFeatures[1]} />

        {/* </table> */}
      </div>
    </Testing>

  );
}

export default Comparison;
