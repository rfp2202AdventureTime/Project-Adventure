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
      <div>
        <Item1>
          item1
        </Item1>

        <Item2>
          item2
        </Item2>

      </div>

    </div>
  )
};

export default Comparison;

