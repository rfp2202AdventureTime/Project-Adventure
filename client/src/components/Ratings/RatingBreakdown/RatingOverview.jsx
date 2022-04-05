import React from 'react';
import styled from 'styled-components';

import { useMeta } from '@Contexts/ReviewContext';
import Star from '../../../Star';

export default function RatingOverview() {
  // Display Rating && helpfulness
  let totalRating;
  let avgRating = 0;
  let totalCT = null;
  let helpfulness = null;
  const currentMeta = useMeta();
  if (currentMeta) {
    const { ratings, recommended } = currentMeta;
    // Handle Rating

    Object.keys(ratings).forEach((key) => {
      const currentCT = Number(ratings[key]);
      totalRating = key * currentCT;
      totalCT += currentCT;
    });
    avgRating = Math.round((totalRating / totalCT) * 10) / 10;

    // Handle helpfulness
    const trueCT = Number(recommended.true);
    const falseCT = Number(recommended.false);
    helpfulness = Math.round((trueCT / (trueCT + falseCT)) * 100);
  }

  return (
    <RatingOverviewContainer>
      <h3>
        RATINGS & REVIEWS
      </h3>
      <StarContainer>
        <Score>
          {avgRating}
        </Score>
        <Star score={avgRating} />
      </StarContainer>
      <div>
        {helpfulness}
        % of reviews recommend this product
      </div>
    </RatingOverviewContainer>
  );
}

// Style componnets
const RatingOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Score = styled.div`
  padding-right: 1rem;
  font-size: 4rem;
  font-weight: bold
`;