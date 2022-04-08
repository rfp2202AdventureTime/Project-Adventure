import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {
  let totalCT;
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [reviews, setReviews] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (reviewMeta) {
      totalCT = reviewMeta.totalCT;
      axios({
        method: 'get',
        url: '/reviews',
        params: {
          product_id: productId,
          count: totalCT,
        },
      })
        .then(({ data }) => {
          setReviews(data);
        })
        .catch((err) => console.log(err));
    }
  }, [productId, reviewMeta]);

  // change count when clicked
  const fetchFeed = () => {
    if (reviews && reviewMeta) {
      totalCT = reviewMeta.totalCT;
      setCount(Math.min(totalCT, count + 2));
    }
  };

  return (
    <ReviewContainer>
      {reviews ? reviews.results.slice(0, count + 1).map(
        (review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
          />
        ),
      ) : ''}
      <ButtonBlock>
        <Botton onClick={fetchFeed}> MORE REVIEWS</Botton>
        <Botton> ADD A REVIEW +</Botton>
      </ButtonBlock>
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.3rem 1rem 1.3rem 1rem;
`;
const Botton = styled.button`
  border: 2px solid;
  text-align: center;
  padding: 1.3rem 1rem 1.3rem 1rem;
  font-size: medium;
  font-weight: 700;

`;
