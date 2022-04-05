import React from 'react';
import styled from 'styled-components';

// import { useMeta } from '@Contexts/ReviewContext';

export default function FactorList() {
  return (
    <Factor>
      {/* {FactorBars} */}
      This is FactorBar
    </Factor>
  );
}

// Style components
const Factor = styled.div`
  display: flex;
  flex-direction: column;
`;
