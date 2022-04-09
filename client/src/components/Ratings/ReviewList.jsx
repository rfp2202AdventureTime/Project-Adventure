import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import PropTypes from 'prop-types';
import ReviewTile from './Review/ReviewTile';
import SortBar from './Review/SortBar';
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList({ filterStatus }) {
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [sort, setSort] = useState('relevant');
  const [prevCount, setPrevCount] = useState(0);
  const [reviewDetail, setReviewDetail] = useState({
    // prevCount: 0,
    allReview: [],
    filteredReview: [],
    totalCT: 0,
  });

  const filterReview = (reviews) => {
    let filteredReview = [];
    if (filterStatus.filterCount) {
      reviews.forEach((review) => {
        const star = review.rating.toString();
        filterStatus[star] && filteredReview.push(review);
      });
    } else {
      filteredReview = reviews;
    }
    return filteredReview;
  };

  // totalCT get from reviewMeta isn't accurate due to reported reviews removal from db
  const getReview = () => (
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        /// here
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
  };

  const reportReview = (index, reviewId) => {
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/report`,
    })
      .then(() => {
        const tempData = reviewDetail;
        tempData.allReview.splice(index, 1);
        setReviewDetail({
          ...reviewDetail,
          allReview: tempData.allReview,
          totalCT: tempData.totalCT,
        });
      })
      .catch((err) => Console.log(err));
  };

  const fetchFeed = () => {
    if (reviewDetail.prevCount < reviewDetail.allReview.length) {
      setReviewDetail({
        ...reviewDetail,
        filteredReview: filterReview(reviewDetail.allReview),
        // prevCount: reviewDetail.allReview.length,
      });
      setPrevCount(reviewDetail.allReview.length)
    }
  };

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
        console.log('rendering', data);
        setReviewDetail({
          filteredReview: filterReview(data.results),
          allReview: data.results,
          totalCT: data.results.length,
          // prevCount: Math.min(data.results.length, 2),
        });
        setPrevCount(Math.min(data.results.length, 2));
        if (!filterStatus.filterCount) {
          setReviewDetail({
            ...reviewDetail,
            filteredReview: data.results.slice(0,prevCount),
          });
        }

      })
      .catch((err) => Console.log(err));
  }, [productId, sort, filterStatus.filterCount, prevCount]);

  console.log(reviewDetail.filteredReview);
  console.log( 'count ', prevCount);
  return (
    <ReviewSection>
      <SortBar
        totalCT={reviewDetail.filteredReview.length}
        handleSort={handleSort}
      />
      <ReviewContainer>
        {reviewDetail.filteredReview.map(
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
        {(prevCount < reviewDetail.allReview.length)
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
    background-color:${({ theme }) => theme.colors.buttonHover}
  }
`;

// TODO: figure out nested proptype
// ReviewList.propTypes = {
//   filterStatus: PropTypes.shape({
//   }),
// };
