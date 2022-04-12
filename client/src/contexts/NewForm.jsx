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
  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setData({
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    axios({
      method: 'post',
      url: `/${formtype}`,
      data,
    })
      .catch((err) => Console.log(err));
  };

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

  const addtionalReviewInput = (formtype === 'reviews') ? (
    <>
      <label htmlFor="rating">
        <div>
          Overall rating?
        </div>
        <input type="number" name="rating" required />
      </label>
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
            <label htmlFor={type.summary}>
              <div>
                {type.summary}
              </div>
              <input type="text" name="summary" required />
            </label>
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
`;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};
