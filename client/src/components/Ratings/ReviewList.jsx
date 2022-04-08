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
  const [prevCount, setPrevCount] = useState(0);
  const [page, setPage] = useState(1);
  const [reviewFeed, setReviewFeed] = useState([]
  );

  const getReview = () => (
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        count: 2,
        page,
      },
    }));

  // TODO: check to see if there's memory leakage on unmounted components. Unsure why I didn't need a loading varable here. Will have to investigate
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        const review = data.results;
        setPrevCount(review.length);
        setReviewFeed(reviewFeed.concat(review));
      })
      .catch((err) => console.log(err));
  }, [page]);

  const fetchFeed = () => {
    totalCT = reviewMeta?.totalCT;
    if(prevCount < totalCT) {
      setPage(page + 1);
    }
  };

  return (
    <ReviewContainer>
      {reviewFeed.map(
        (review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
          />
        ),
      )}
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
