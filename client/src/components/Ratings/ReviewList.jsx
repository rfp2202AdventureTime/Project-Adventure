import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './Review/ReviewTile';
import { ReviewProvider } from '../../contexts/ProductReview';
import { ProductIDContext } from '../../contexts/ProductIDContext';

export default function ReviewList() {


  return (
    <ReviewContainer>
      ReviewList
      {productReview.map((review) => <ReviewTile review={review} />)}
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
