import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
import Console from '../Console';

// formtype: reviews, questions, answers
export default function NewForm({ formtype, productName, showModal }) {
  let type;
  const [modalStatus, setModalStatus] = useState(true);
  const [data, setData] = useState({});
  const factorSummary = {
    Size: ['A size too small', 'half a size too small', 'Perfect', 'half a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly unconfortable', 'OK', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs big'],
  };
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

  // move summary to seperate
  const reviews = {
    title: 'Write Your Review',
    subtitle: `About the ${productName}`,
    summary: 'Review summary:',
    body: 'Review body:',
    photo: 'Upload your photos',
  };
  if (formtype === 'reviews') {
    type = reviews;
  }

  // TODO: make this dynapmic for all post
  // const sharedQuestionInput = {
  //   title: 'Ask Your Question',
  //   subtitle: `About the ${productName}`,
  //   body: 'Your Question: ',
  // };

  // const sharedAnswerInput = {
  //   title: 'Submit Your Answer',
  //   // subtitle: `${productName}:${questionBody}`,
  //   body: 'Your Question: ',
  //   photo: 'Upload your photos',
  // };

  const shared = {
    username: 'What is your nickname?',
    email: 'Your email:',
  };

  const starRating = (
    // <div className="container">
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
    // </div>

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
        <div>
          <input type="radio" name="recommendation" value="yes" checked />
          <label for="yes">{' Yes'}</label>
        </div>
        <div>
          <input type="radio" name="recommendation" value="no" />
          <label for="no">{' No'}</label>
        </div>
      </label>
      <label htmlFor="characteristics">
        <div>
          Characteristics
        </div>
        <input type="text" name="recommendation" required />
      </label>
      <label htmlFor={type.summary}>
        <div>
          {type.summary}
        </div>
        <input type="text" name="summary" required />
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
      <Modal
        className="Modal"
        showModal={showModal && modalStatus}
      >
        <div>{type.title}</div>
        <div>{type.subtitle}</div>
        <form onChange={handleChange}>
          <FormContainer>
            {addtionalReviewInput}
            <label htmlFor={type.body}>
              <div>
                {type.body}
              </div>
              <input type="text" name="body" required />
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
          </FormContainer>
          <input type="submit" value="Submit" onSubmit={handleOnSubmit} />
        </form>

        <ModalClose
          onClick={clickExit}
        >
          &times;
        </ModalClose>
      </Modal>
    </ModalParent>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};
