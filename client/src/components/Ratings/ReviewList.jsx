import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import PropTypes from 'prop-types';
import ReviewTile from './Review/ReviewTile';
import SortBar from './Review/SortBar';
import SearchBar from './Review/SearchBar';
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { ProductIDContext } from '../../contexts/ProductIDContext';
import { Button } from '../../contexts/Shared.styled';

export default function ReviewList({ filterStatus }) {
  const productId = useContext(ProductIDContext);
  const reviewMeta = useMeta();
  const [sort, setSort] = useState('relevant');
  const [initialRender, setInitialRender] = useState(true);
<<<<<<< HEAD
  const [keyword, setKeyword] = useState(null);
=======
>>>>>>> 46fcd52 (fix review render sorting bug fix)
  const [prevCount, setPrevCount] = useState(0);
  const [reviewDetail, setReviewDetail] = useState({
    allReview: [],
    filteredReview: [],
    totalCT: 0,
  });

  // totalCT get from reviewMeta isn't accurate due to reported reviews removal from
  // db but reflects the max possible review count
  const getReview = () => (
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        count: (reviewMeta?.totalCT || 999),
        sort,
      },
    })
      .catch((err) => Console.log(err))
  );

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

  const handleSearch = () => {
    setKeyword(keyword);
    const searchedData = reviewDetail.filteredReview.filter(
      (review) => review.body.toLowerCase().includes(keyword) || review.summary.toLowerCase().includes(keyword),
    );
    setReviewDetail({
      ...reviewDetail,
      prevCount: searchedData.length,
      filteredReview: searchedData,
    });
  };

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
    // console.log('filteredReview Output is' , filteredReview)
    return filteredReview;
  };

<<<<<<< HEAD
  const resetSearch = () => {
    const filteredData = filterReview(reviewDetail.allReview);
    setReviewDetail({
      ...reviewDetail,
      prevCount: filteredData.length,
      filteredReview: filteredData,
    });
    setKeyword(null);
=======
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
>>>>>>> 46fcd52 (fix review render sorting bug fix)
  };

  const reportReview = (reviewId) => {
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/report`,
    })
      .catch((err) => Console.log(err));
  };


  const fetchFeed = () => {
    if (prevCount < reviewDetail.allReview.length) {
      setReviewDetail({
        ...reviewDetail,
        filteredReview: filterReview(reviewDetail.allReview),
      });
      setPrevCount(reviewDetail.allReview.length);
    }
  };

  // TODO: check to see if there's memory leakage on unmounted components.
  useEffect(() => {
    getReview()
      .then(({ data }) => {
<<<<<<< HEAD
=======
        // console.log('rendering', data);
>>>>>>> 46fcd52 (fix review render sorting bug fix)
        setInitialRender(initialRender && !initialRender);
        setReviewDetail({
          filteredReview: filterReview(data.results),
          allReview: data.results,
          totalCT: data.results.length,
        });
        (initialRender) && setPrevCount(Math.min(data.results.length, 2));
        if (!filterStatus.filterCount) {
          setReviewDetail({
            allReview: data.results,
            totalCT: data.results.length,
            filteredReview: data.results.slice(0, prevCount),
          });
        }
      })
      .catch((err) => Console.log(err));
  }, [productId, sort, filterStatus.filterCount, prevCount]);

  return (
    <ReviewSection>
<<<<<<< HEAD
      <StickyTop>
        <SearchBar
          resetSearch={resetSearch}
          handleSearch={handleSearch}
        />
        <SortBar
          totalCT={reviewDetail.filteredReview.length}
          allCT={reviewDetail.allReview.length}
          handleSort={handleSort}
        />
      </StickyTop>
      {reviewDetail.filteredReview.map(
        (review) => (
          <ReviewTile
            key={review.review_id.toString()}
            addHelpVote={addHelpVote}
            review={review}
            keyword={keyword}
            reportReview={reportReview}
          />
        ),
      )}
      <StickyBottom>
        <ButtonBlock>
          { (!(filterStatus.filterCount)
            && (prevCount < reviewDetail.allReview.length))
            ? (
              <Button onClick={fetchFeed}>
                More Reviews
              </Button>
            ) : ''}
          <Button> Add a Review +</Button>
        </ButtonBlock>
      </StickyBottom>
=======
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
        { (!(filterStatus.filterCount)
          && (prevCount < reviewDetail.allReview.length))
          ? (
            <Botton onClick={fetchFeed}>
              MORE REVIEWS
            </Botton>
          ) : ''}
        <Botton> ADD A REVIEW +</Botton>
      </ButtonBlock>
>>>>>>> 46fcd52 (fix review render sorting bug fix)
    </ReviewSection>
  );
}

// Styled Container
const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 60rem;
  width: 100%
`;
const StickyTop = styled.div`
  position: sticky;
  top:0;
  width:100%;
  z-index:100;
  background-color: ${({ theme }) => theme.colors.light}
`;
const StickyBottom = styled(StickyTop)`
  bottom:0;
`;
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.3rem 1rem 1.3rem 1rem;
`;
