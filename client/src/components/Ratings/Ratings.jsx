import React from 'react';
import styled from 'styled-components';
import { useMeta } from '../../contexts/ReviewMeta';
import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';

export default function Ratings() {
  const currentMeta = useMeta();
  const ratingBreakdown = (currentMeta && currentMeta.avgRating) ? <RatingBreakdown /> : <div />;

  return (
    <RatingSection>
      {ratingBreakdown}
      <ReviewList />
    </RatingSection>
  );
}

// inherented theme
const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: row;
  padding: 2rem 0rem 4rem 1rem;
`;
