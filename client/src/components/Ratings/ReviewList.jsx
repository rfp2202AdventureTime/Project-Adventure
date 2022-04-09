import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [reviewDetail, setReviewDetail] = useState({
    prevCount: 0,
    allReview: [],
  });

  const getReview = () => (
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        count: reviewMeta?.totalCT,
      },
    }));

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        console.log('fetching')
        setReviewDetail({
          allReview: data.results,
          prevCount: Math.min(data.results.length, 2),
        });
      })
      .catch((err) => Console.log(err));
  }, [productId]);

  const fetchFeed = () => {
    if (reviewDetail.prevCount < reviewDetail.allReview.length) {
      setReviewDetail({
        allReview: reviewDetail.allReview,
        prevCount: reviewDetail.allReview.length,
      });
    }
  };

  return (
    <ReviewContainer>
      {reviewDetail.allReview.slice(0, reviewDetail.prevCount).map(
        (review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
          />
        ),
      )}
      <ButtonBlock>
        {(reviewDetail.prevCount < reviewDetail.allReview.length)
          ? (
            <Botton onClick={fetchFeed}>
              MORE REVIEWS
            </Botton>
          ) : ''}
        <Botton> ADD A REVIEW +</Botton>
      </ButtonBlock>
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 45rem;
  width: 100%
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
