import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from './ProductIDContext';

const ReviewContext = React.createContext();
ReviewContext.displayName = 'RatingData';

export function useMeta() {
  return useContext(ReviewContext);
}

export function ReviewProvider({ children }) {
  const productId = useContext(ProductIDContext);
  const [reviewMeta, setReviewMeta] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: productId,
      },
    })
      .then(({ data }) => {
        setReviewMeta(data);
      })
      .catch(() => setReviewMeta(null));
  }, [productId]);

  return (
    <ReviewContext.Provider value={reviewMeta}>
      { children }
    </ReviewContext.Provider>
  );
}

ReviewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
