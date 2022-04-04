import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ReviewContext = React.createContext();

export function useTheme() {
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
      .catch((err) => console.error(err));
  }, []);

  return (
    <ReviewContext.Provider value={reviewMeta}>
      { children }
    </ReviewContext.Provider>
  );
}
