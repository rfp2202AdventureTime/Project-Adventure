import React from 'react';
import { ColumnContainer } from '../Styles/RatingSection.styled';
import { useMeta } from './ReviewContext';

export default function RatingList() {
  const starMap = new Map();
  let totalCT = 0;
  let starPCTArray = [];

  const currentMeta = useMeta();
  if (currentMeta) {
    const { ratings } = currentMeta;
    const starArray = [5, 4, 3, 2, 1];

    // TODO: rating is partially shared with RatingOverview. Could refactor to lift state up

    // fist loop to get total count
    starArray.forEach((key) => {
      const currentCT = Number(ratings[key]);
      if (Number.isNaN(currentCT)) {
        starMap.set(key, 0);
      } else {
        starMap.set(key, currentCT);
        totalCT += currentCT;
      }
    });

    // second loop to calculate percentage
    starMap.forEach((value) => {
      starPCTArray.push(value / totalCT);
    });
  }
  const ratingBars = starPCTArray.map((pct) => <div>{pct}</div>);
  return (
    <ColumnContainer>
      {/* {ratingBars} */}
      <div className="w3-light-grey">
        <div className="w3-green" style={{height:'2rem',width:'25%'}}></div>
      </div>
    </ColumnContainer>
  );
}
