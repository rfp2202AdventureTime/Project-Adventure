import React from 'react';
import styled from 'styled-components';
import FactorBar from './FactorBar';
import { useMeta } from '../../../contexts/ReviewMeta';

export default function FactorList() {
  const meta = useMeta();
  let factor;
  let factorBars = [];
  // const factor = (meta && meta.characteristics) ? <FactorBar meta={meta} /> : <div />;
  if (meta) {
    factor = meta.characteristics;
    factorBars = Object.keys(factor).map((key) => (
      <FactorBar
        factor={key}
        score={factor[key].value}
        key={factor[key].id}
      />
    ));
  }
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
