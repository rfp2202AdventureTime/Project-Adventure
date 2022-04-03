import React from 'react';
import styled from 'styled-components';
import Star from '../../Star';

export default function Ratings() {
  return (
    <RatingsSection>
      <h3>
        Ratngs & Reviews
      </h3>
      <Star />
      <div>
        TBD% of reivews recommend this product
      </div>
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
