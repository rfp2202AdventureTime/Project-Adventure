import React from 'react';
import styled from 'styled-components';

const Item1 = styled.p`
  text-align: left
`;

const Item2 = styled(Item1)`
  text-align: right
`;

function Comparison() {
  return (
    <div>
      <title>This is a test of the comparison table</title>

    </div>

  );
}

export default Comparison;
