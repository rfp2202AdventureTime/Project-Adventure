import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from './ProductIDContext';

const productReview = React.createContext();
productReview.displayName = 'ReviewData';

// custome hook to return useContext
export function useReviews() {
  return useContext(productReview);
}

export function PRProvider({ children }) {
  const productId = useContext(ProductIDContext);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews',
      params: {
        product_id: productId,
      },
    })
      .then(({ data }) => {
        setReviews(data);
      })
      .catch(() => setReviews(null));
  }, [productId]);

  return (
    <productReview.Provider value={reviews}>
      { children }
    </productReview.Provider>
  );
}

PRProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
