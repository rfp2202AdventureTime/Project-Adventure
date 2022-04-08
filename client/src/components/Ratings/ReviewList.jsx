import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [prevCount, setPrevCount] = useState(0);
  const [page, setPage] = useState(1);
  const [reviewFeed, setReviewFeed] = useState([]
    );
  let totalCT = reviewMeta?.totalCT;
  ;

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

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        const review = data.results;
        if (reviewFeed.length === 0) {
          setPrevCount(review.length);
        } else {
          setPrevCount(Math.min(totalCT, prevCount + 2));
        }
        setReviewFeed(reviewFeed.concat(review));
      })
      .catch((err) => console.log(err));
  }, [page]);

  const fetchFeed = () => {
    if(prevCount < totalCT) {
      setPage(page + 1);
    }
  };
  console.log("prevCount", prevCount)
  console.log("totalCT", totalCT)

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
        {(prevCount < totalCT) ?
          (<Botton onClick={fetchFeed}>
            MORE REVIEWS
          </Botton>) : ''
        }
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
