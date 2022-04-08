import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Star from '../../../Star';
import PhotoList from './PhotoList';

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
    // console.log('clicked');
    setModalUrl(photos[index].url);
    setShowModal(!showModal);
  };
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
      {body}
      <PhotoList
        photos={photos}
        isSelected={clickPhoto}
      />
      <Modal
        showModal={showModal}
        modal={modalUrl}
      >
        <ModalClose />
      </Modal>
    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding:1rem;
  min-width:950px;
  border-bottom: 0.2rem dotted rgba(221, 235, 223);
`;
const StarBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserData = styled.div`
  justify-content: end
`;

const ReviewHeading = styled.p`
  font-weight:bold;
  font-size: medium;
  padding: 1rem 0 1rem 0;
`;

const ModalClose = styled.a`
    fcolor: #aaa;
    line-height: 50px;
    font-size: 80%;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    &:hover {
      color: black;
    }
`;

const Modal = styled.div`
  background: ${(props) => (props.modal ? `url(${props.modal})` : props.theme.colors.transparent)};

  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  pointer-events: none;
  transition: all 0.3s;
  visibility: ${(props) => (props.showModal ? 'visible' : 'hidden')};

`;
