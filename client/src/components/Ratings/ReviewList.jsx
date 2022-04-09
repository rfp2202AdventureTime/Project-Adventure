import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {
  const productId = useContext(ProductIDContext);
  // const [prevCount, setPrevCount] = useState(0);
  // const [allReview, setAllReview] = useState([]);
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
        count: 999,
      },
    }));

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        setReviewDetail({
          allReview: data.results,
          prevCount: Math.min(data.results.length, 2),
        });
      })
      .catch((err) => Console.log(err));
  }, [productId]);

  const fetchFeed = () => {
    if (prevCount < allReview.length) {
      setPrevCount(allReview.length);
    }
  };

  return (
    <ReviewContainer>
      {allReview.slice(0, prevCount + 1).map(
        (review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
          />
        ),
      )}
      <ButtonBlock>
        {(prevCount < allReview.length)
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
