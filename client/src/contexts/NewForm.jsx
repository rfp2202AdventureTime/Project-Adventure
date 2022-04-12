import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
import Console from '../Console';
import Star from '../Star';

// formtype: reviews, questions, answers
export default function NewForm({ formtype, productName, showModal }) {
  let type;
  const [modalStatus, setModalStatus] = useState(true);
  const [data, setData] = useState({});
  const handleChange = (e) => setData((prevState) => (
    { ...prevState, [e.target.name]: e.target.value }));

  const handleOnSubmit = () => {
    axios({
      method: 'post',
      url: `/${formtype}`,
      data,
    })
      .catch((err) => Console.log(err));
  };

  //move summary to seperate
  const reviews = {
    title: 'Write Your Review',
    subtitle: `About the ${productName}`,
    summary: 'Review summary:',
    body: 'Review body:',
    photo: 'Upload your photos',
  };

  // TODO: make this dynapmic for all post
  const sharedQuestionInput = {
    title: 'Ask Your Question',
    subtitle: `About the ${productName}`,
    body: 'Your Question: ',
  };

  const sharedAnswerInput = {
    title: 'Submit Your Answer',
    // subtitle: `${productName}:${questionBody}`,
    body: 'Your Answer: ',
    photo: 'Upload your photos',
  };

  const shared = {
    username: 'What is your nickname?',
    email: 'Your email:',
  };

  if (formtype === 'review') {
    type = reviews;
  } else if (formtype === 'question') {
    type = sharedQuestionInput;
  } else if (formtype === 'answer') {
    type = sharedAnswerInput;
  }

  const starRating = (
    <div className="container">
      <div className="rating">
        <input type="radio" name="rating" id="rating-5" />
        <label htmlFor="rating-5" />
        <input type="radio" name="rating" id="rating-4" />
        <label htmlFor="rating-4" />
        <input type="radio" name="rating" id="rating-3" />
        <label htmlFor="rating-3" />
        <input type="radio" name="rating" id="rating-2" />
        <label htmlFor="rating-2" />
        <input type="radio" name="rating" id="rating-1" />
        <label htmlFor="rating-1" />
      </div>
    </div>
  );

  const addtionalReviewInput = (formtype === 'reviews') ? (
    <>
      <div>
        Overall rating?
      </div>
      {starRating}
      <label htmlFor="recommendation">
        <div>
          Do you recommendation this product?
        </div>
        <input type="text" name="recommendation" required />
      </label>
      <label htmlFor="characteristics">
        <div>
          Characteristics
        </div>
        <input type="text" name="recommendation" required />
      </label>
    </>

  ) : '';

  const additionalAnswerInput = (formtype === 'answer') ? (
    <>
      <div>Upload Your Images</div>
      <label htmlFor={shared.email}>
        <input type="text" name="email" required />
      </label>
    </>
  ) : '';

  const clickExit = () => {
    setModalStatus(false);
  };

  return (
    <ModalParent
      className="ModalParent"
      showModal={showModal && modalStatus}
    >
      <FormModal
        className="Modal"
        showModal={showModal && modalStatus}
      >
        <div>{type.title}</div>
        <div>{type.subtitle}</div>
        <form onChange={handleChange}>
          <FormContainer>
            {addtionalReviewInput}
            {(type.summary !== undefined) && (
              <label htmlFor={type.summary}>
                <div>
                  {type.summary}
                </div>
                <input type="text" name="summary" required />
              </label>
            )}
            <label htmlFor={type.body}>
              <div>
                {type.body}
              </div>
              <textarea type="text" name="body" required />
            </label>
            <label htmlFor={shared.username}>
              <div>
                {shared.username}
              </div>
              <input type="text" name="username" required />
            </label>
            <label htmlFor={shared.email}>
              <div>
                {shared.email}
              </div>
              <input type="text" name="email" required />
            </label>
            {additionalAnswerInput}
          </FormContainer>
          <input type="submit" value="Submit" onSubmit={handleOnSubmit} />
        </form>

        <ModalClose
          onClick={clickExit}
        >
          &times;
        </ModalClose>
      </FormModal>
    </ModalParent>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormModal = styled(Modal)`
  overflow:scroll;
`;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};
