import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ReviewContext = React.createContext();

export function useTheme() {
  return useContext(ReviewContext);
}

export function ReviewProvider({ children }) {
  const [reviewMeta, setReviewMeta] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: '65632',
      },
    })
      .then(({ data }) => {
        console.log('data is', data);
        setReviewMeta(data);
        // console.log(reviewMeta);
      })
      // .then(() => {
      //   setLoading(false);
      // })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ReviewContext.Provider value={reviewMeta}>
      { children }
    </ReviewContext.Provider>
  );
}
