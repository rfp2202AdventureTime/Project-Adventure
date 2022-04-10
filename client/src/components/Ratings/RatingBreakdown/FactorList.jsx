import React from 'react';
import styled from 'styled-components';
import FactorBar from './FactorBar';
import { useMeta } from '../../../contexts/ReviewMeta';

export default function FactorList() {
  const meta = useMeta();
  const factorBars = [];
  const factor = meta?.characteristics;
  Object.keys(factor).forEach((key) => {
    if (factor[key].value) {
      factorBars.push(<FactorBar
        factor={key}
        score={factor[key].value}
        key={factor[key].id}
      />);
    }
  });

  return (
    <Factor>
      {factorBars}
    </Factor>
  );
}

// Style components
const Factor = styled.div`
  display: flex;
  flex-direction: column;
`;
