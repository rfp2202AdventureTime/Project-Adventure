import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useCurrentProductId } from './ProductIDContext';

const RatingContext = React.createContext();
RatingContext.displayName = 'RatingData';

// custome hook to return useContext
export function useMeta() {
  return useContext(RatingContext);
}

// Context has reviewMeta received from API plus converted avgRating and total rating count
export function RatingProvider({ children }) {
  // const productId = useContext(ProductIDContext);
  const { currentProductId } = useCurrentProductId();
  const [reviewMeta, setReviewMeta] = useState(null);

  function convertRating(data) {
    let totalRating = 0;
    let avgRating = 0;
    let totalCT = null;
    const { ratings } = data;
    Object.keys(ratings).forEach((key) => {
      const currentCT = Number(ratings[key]);
      totalRating += key * currentCT;
      totalCT += currentCT;
    });
    avgRating = Math.round((totalRating / totalCT) * 10) / 10;
    return { avgRating, totalCT };
  }

  useEffect(() => {
    if (currentProductId) {
      let newData;
      axios({
        method: 'get',
        url: '/reviews/meta',
        params: {
          product_id: currentProductId,
        },
      })
        .then(({ data }) => {
          newData = data;
          const RatingDetails = convertRating(data);
          newData.avgRating = RatingDetails.avgRating;
          newData.totalCT = RatingDetails.totalCT;
          setReviewMeta(newData);
        })
        .catch(() => setReviewMeta(null));
    }
  }, [currentProductId]);

  return (
    <RatingContext.Provider value={reviewMeta}>
      { children }
    </RatingContext.Provider>
  );
}

RatingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
