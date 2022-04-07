import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from './ProductIDContext';

const ReviewContext = React.createContext();
ReviewContext.displayName = 'ReviewData';

// custome hook to return useContext
export function useReviews() {
  return useContext(ReviewContext);
}

export function ReviewProvider({ children }) {
  const productId = useContext(ProductIDContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: '/reviews',
      params: {
        product_id: productId,
        // page: 1,
        count: 2,
      },
    })
      .then(({ data }) => {
        setReviews(data);
      })
      .catch(() => setReviews(null));
  }, [productId]);
  return (
    <ReviewContext.Provider value={reviews}>
      { children }
    </ReviewContext.Provider>
  );
}

ReviewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
