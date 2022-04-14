import React, { useState, useContext, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import PropTypes from 'prop-types';
const ReviewTile = lazy(() => import('./Review/ReviewTile'));
const SortBar = lazy(() => import('./Review/SortBar')) ;
const SearchBar = lazy(() => import('./Review/SearchBar')) ;
import Console from '../../Console';
import { useMeta } from '../../contexts/ReviewMeta';
import { useCurrentProductId, useCurrentProduct } from '../../contexts/ProductIDContext';
import { Button } from '../../contexts/Shared.styled';
import NewForm from '../../contexts/NewForm';

export default function ReviewList({ filterStatus }) {
  const { currentProductId } = useCurrentProductId();
  const { currentProduct } = useCurrentProduct();
  const reviewMeta = useMeta();
  const [sort, setSort] = useState('relevant');
  const [initialRender, setInitialRender] = useState(true);
  // const [reviewStatus, setReviewStatus] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [prevCount, setPrevCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
        product_id: currentProductId,
        count: (reviewMeta?.totalCT || 999),
        sort,
      },
    })
      .catch((err) => Console.log(err))
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
  const changeSelected = () => {
    const $select = document.querySelector('#mySelect');
    $select.value = 'newest';
  };

  const handleSearch = (keyword) => {
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

  const resetSearch = () => {
    const filteredData = filterReview(reviewDetail.allReview);
    setReviewDetail({
      ...reviewDetail,
      prevCount: filteredData.length,
      filteredReview: filteredData,
    });
    setKeyword(null);
  };

  const reportReview = (reviewId) => {
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/report`,
    })
      .catch((err) => Console.log(err));
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
    return filteredReview;
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
    if (currentProductId) {
      getReview()
        .then(({ data }) => {
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
    }
  }, [currentProductId, sort, filterStatus.filterCount, prevCount]);

  return (
    <Suspense fallback={<div>Loading...</div>}>

    <ReviewSection>
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
          <Button onClick={toggleModal}> Add a Review +</Button>
          <NewForm
            formtype="reviews"
            productName={currentProduct?.name}
            showModal={showModal}
            setShowModal={setShowModal}
            changeSelected={changeSelected}
            setSort={setSort}
          />
        </ButtonBlock>
      </StickyBottom>
    </ReviewSection>
    </Suspense>

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
