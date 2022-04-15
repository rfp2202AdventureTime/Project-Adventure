import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Star from '../../../Star';
import PhotoList from './PhotoList';
import ReviewContent from './ReviewContent';
import UserInteraction from './UserInteraction';
import HighlightText from './HighlightText';
import { Modal, ModalParent, ModalClose } from '../../../contexts/Shared.styled';

export default function ReviewTile({
  review, addHelpVote, reportReview, keyword,
}) {
  const {
    rating, summary, recommend, response, date, body, photos, helpfulness,
  } = review;
  const convertedDate = moment(date).format('MMMM D, YYYY');
  const reviewId = review.review_id;
  const usernameDate = `${review.reviewer_name},  ${convertedDate}`;
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const clickPhoto = (i) => {
    setModalUrl(photos[i].url);
    setShowModal(!showModal);
  };

  const clickExit = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const espExit = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', espExit);
    return () => window.removeEventListener('keydown', espExit);
  }, []);

  return (
    <ReviewBlock>
      <UserRatingRow>
        <Star score={rating} />
        {usernameDate}
      </UserRatingRow>
      <ReviewHeading>
        {keyword
          ? (
            <HighlightText
              text={summary}
              highlight={keyword}
            />
          )
          : summary}
      </ReviewHeading>
      <ReviewContent
        keyword={keyword}
        body={body}
      />
      {recommend && <Recommend> &#10003; I recommend this product</Recommend>}
      {(response
        && (
          <Response>
            <div>
              <b>Response from seller:</b>
            </div>
            {response}
          </Response>
        ))}
      <PhotoList
        photos={photos}
        isSelected={clickPhoto}
      />
      <ModalParent
        className="ModalParent"
        showModal={showModal}
      >
        <Modal
          className="Modal"
          showModal={showModal}
          modal={modalUrl}
        >
          <ModalClose
            onClick={clickExit}
          >
            &times;
          </ModalClose>
        </Modal>
      </ModalParent>
      <UserInteraction
        addHelpVote={addHelpVote}
        reviewId={reviewId}
        helpfulness={helpfulness}
        reportReview={reportReview}
      />
    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0.8rem 0.4rem 0.8rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;
const UserRatingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: small;
`;

const ReviewHeading = styled.p`
  font-family: ${({ theme }) => theme.fonts.title.family};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0 1rem 0;
`;

const Response = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.7rem;
  margin: 0.7rem;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
`;
const Recommend = styled.div`
  padding: 0.7rem 0.7rem 0 0.7rem;
  font-style: italic;
`;

ReviewTile.propTypes = {
  addHelpVote: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  review: PropTypes.shape().isRequired,
};

ReviewTile.defaultProps = {
  keyword: null,
};
