import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ReviewContext = React.createContext();

export function useMeta() {
  return useContext(ReviewContext);
}

export function ReviewProvider({ children }) {
  const [reviewMeta, setReviewMeta] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: '65632',
      },
    })
      .then(({ data }) => {
        setReviewMeta(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ReviewContext.Provider value={reviewMeta}>
      { children }
    </ReviewContext.Provider>
  );
}

ReviewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
