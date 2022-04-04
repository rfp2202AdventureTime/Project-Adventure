import React from 'react';
import styled from 'styled-components';
import RatingBreakdown from './RatingBreakdown';

export default function Ratings() {
  return (
    <RatingsSection>
      <h1>Ratings and Reviews for product id 65632</h1>
      <RatingBreakdown />
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
