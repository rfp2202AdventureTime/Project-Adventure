import React from 'react';
import styled from 'styled-components';


export default function FactorList() {
  return (
    <Factor>
      {/* {FactorBars} */}
      This is FactorList
    </Factor>
  );
}

// Style components
const Factor = styled.div`
  display: flex;
  flex-direction: column;
`;
