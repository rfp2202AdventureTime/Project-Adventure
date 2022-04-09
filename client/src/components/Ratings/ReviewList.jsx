import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import SortBar from './Review/SortBar';
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [sort, setSort] = useState('relevant');
  const [reviewDetail, setReviewDetail] = useState({
    prevCount: 0,
    allReview: [],
    totalCT:0,
  });

  // totalCT get from reviewMeta isn't accurate due to reported reviews removal from db
  const getReview = () => (
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        count: reviewMeta?.totalCT,
        sort,
      },
    }));

  const addHelpVote = (reviewId) => {
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/helpful`,
    })
      .catch((err) => Console.log(err));
  };

  const handleSort = (criteria) => {
    setSort(criteria);
  }

  const reportReview = (index, reviewId) => {
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/report`,
    })
    .then( () => {
      let tempData = reviewDetail;
      tempData.allReview.splice(index, 1);
      setReviewDetail({
        prevCount:reviewDetail.prevCount,
        allReview: tempData.allReview,
        totalCT: tempData.totalCT,
      });
    })
      .catch((err) => Console.log(err));
  };

  const fetchFeed = () => {
    if (reviewDetail.prevCount < reviewDetail.allReview.length) {
      setReviewDetail({
        allReview: reviewDetail.allReview,
        prevCount: reviewDetail.allReview.length,
        totalCT: reviewDetail.totalCT,
      });
    }
  };

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        setReviewDetail({
          allReview: data.results,
          totalCT: data.results.length,
          prevCount: Math.min(data.results.length, 2),
        });
      })
      .catch((err) => Console.log(err));
  }, [productId, sort]);



  return (
    <ReviewSection>
      <SortBar
      totalCT={reviewDetail.totalCT}
      handleSort={handleSort}/>
      <ReviewContainer>
        {reviewDetail.allReview.slice(0, reviewDetail.prevCount).map(
          (review, index) => (
            <ReviewTile
              key={review.review_id.toString()}
              addHelpVote={addHelpVote}
              review={review}
              index={index}
              reportReview={reportReview}
            />
          ),
        )}
      </ReviewContainer>
      <ButtonBlock>
        {(reviewDetail.prevCount < reviewDetail.allReview.length)
          ? (
            <Botton onClick={fetchFeed}>
              MORE REVIEWS
            </Botton>
          ) : ''}
        <Botton> ADD A REVIEW +</Botton>
      </ButtonBlock>
    </ReviewSection>
  );
}

// Styled Container
const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 45rem;
  width: 100%
`;
const ReviewContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // overflow: auto;
  // height: 45rem;
  // width: 100%
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
  &:hover {
    background-color:${({theme}) => theme.colors.buttonHover}
  }
`;
