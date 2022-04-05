import React from 'react';
import styled from 'styled-components';

import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';

export default function Ratings() {
  return (
    <RatingSection>
      <RatingBreakdown />
      <ReviewList />
    </RatingSection>
  );
}

// inherented theme
const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
`;
