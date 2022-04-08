import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Star from '../../../Star';
import PhotoList from './PhotoList';
import ReviewContent from './ReviewContent';

export default function ReviewTile(review) {
  // TODO: display a photo; sort, response, recp,,emt
  const {
    review: {
      rating, summary, recommend, response, date, body, photos,
    },
  } = review;
  const convertedDate = moment(date).format('MMMM D, YYYY');
  // eslint-disable-next-line react/destructuring-assignment
  const usernameDate = `${review.review.reviewer_name},  ${convertedDate}`;
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const clickPhoto = (index) => {
    setModalUrl(photos[index].url);
    setShowModal(!showModal);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <ReviewBlock>
      <StarBlock>
        <Star score={rating} />
        <UserData>
          {usernameDate}
        </UserData>
      </StarBlock>
      <ReviewHeading>
        {summary}
      </ReviewHeading>
      <ReviewContent body={body} />
      <PhotoList
        photos={photos}
        isSelected={clickPhoto}
      />
      <ModalParent
        showModal={showModal}
      >
        <Modal
          showModal={showModal}
          modal={modalUrl}
        />
      </ModalParent>
    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  // border-bottom: 0.2rem dotted rgba(221, 235, 223);
  background-color: ${(props) => props.theme.colors.offWhite};
`;
const StarBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserData = styled.div`
  justify-content: end
`;

const ModalParent = styled.a`
  position: fixed;
  background-color: ${(props) => props.theme.colors.modalBackground};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  pointer-events: disabled;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
`;

const Modal = styled.div`
  z-index: 9999;
  background-position: center;
  width: 60%;
  height: 60%;
  position: relative;
  margin: 10% auto;
  padding: 2rem;
  color: #444;
  background: ${(props) => (props.modal ? `url(${props.modal})` : props.theme.colors.primary)};
  background-repeat: no-repeat;
  background-size: 100% auto%;
  visibility: ${(props) => (props.showModal ? 'visible' : 'hidden')};
  }
`;

const ReviewHeading = styled.p`
  font-weight:bold;
  font-size: medium;
  padding: 1rem 0 1rem 0;
`;
