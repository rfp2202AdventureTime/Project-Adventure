import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ReviewContext';
import Star from '../../Star';

export default function RatingOverview() {
  let totalRating;
  let avgRating;
  let totalCT = 0;
  const currentMeta = useTheme();
  if (currentMeta) {
    const { ratings } = currentMeta;
    Object.keys(ratings).forEach((key) => {
      const currentCT = Number(ratings[key]);
      totalRating = key * currentCT;
      totalCT += currentCT;
    });
    avgRating = Math.round((totalRating / totalCT) * 10) / 10;
  }

  return (
    <RatingsSection>
      <h3>
        Ratngs & Reviews
      </h3>
      {avgRating}
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
