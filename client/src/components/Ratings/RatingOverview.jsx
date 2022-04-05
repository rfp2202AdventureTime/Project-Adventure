import React from 'react';
import { ColumnContainer, Score, StarContainer } from '../Styles/RatingSection.styled';
import { useMeta } from './ReviewContext';
import Star from '../../Star';

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
    <ColumnContainer>
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
    </ColumnContainer>
  );
}
