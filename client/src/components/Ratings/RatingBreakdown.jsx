import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RatingOverview from './RatingOverview';

export const ReviewMetaContext = React.createContext();
export default function RatingBreakdown() {
  const [reviewMeta, setReviewMeta] = useState('null');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: '65632',
      },
    })
      .then(({ data }) => {
        setReviewMeta(data);
      });
  }, []);

  return (
    <RatingsSection>
      <ReviewMetaContext.Provider value={reviewMeta}>
        <RatingOverview />
        {/* <RatingList />
        <FactorList /> */}
      </ReviewMetaContext.Provider>
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
