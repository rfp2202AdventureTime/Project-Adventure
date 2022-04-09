import React from 'react';
import styled from 'styled-components';
import sampleFeatures from '../sampledata/sampleFeatures';
import Features from './Features';

// should get an array with two arrays of features from each item
function Comparison() {
  const item1 = sampleFeatures[0];
  const item2 = sampleFeatures[1];

  return (
    <Testing>
      <div>

        <Features item1={item1} item2={item2} />

      </div>
    </Testing>

  );
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
