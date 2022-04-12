import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
// import Console from '../../Console';

// formtype: review, question
export default function NewForm({ formtype, productName, showModal }) {
  let type;
  const [modalStatus, setModalStatus] = useState(true);
  // const [data, setData] = useState({});
  // const handFormChange = () =
  const review = {
    title: 'Write Your Review',
    subtitle: `About the ${productName}`,
    summary: 'Review summary:',
    body: 'Review body:',
    photo: 'Upload your photos',
  };
  if (formtype === 'review') {
    type = review;
  }

  const sharedQuestionInput = {
    title: 'Ask Your Question',
    subtitle: `About the ${productName}`,
    body: 'Your Question: ',
  };

  const sharedAnswerInput = {
    title: 'Submit Your Answer',
    // subtitle: `${productName}:${questionBody}`,
    body: 'Your Question: ',
    photo: 'Upload your photos',
  };

  const shared = {
    username: 'What is your nickname?',
    email: 'Your email:',
  };

  // const addtionalReviewInput = {};

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
        {/* {addtionalReviewInput} */}
        <form>
          <FormContainer>
            <label htmlFor={type.summary}>
              <div>
                {type.summary}
              </div>
              <input type="text" name="summary" id={type.summary} required />
            </label>
            <label htmlFor={type.body}>
              <div>
                {type.body}
              </div>
              <input type="text" name="body" id={type.body} required />
            </label>
            <label htmlFor={shared.username}>
              <div>
                {shared.username}
              </div>
              <input type="text" name={type.username} id={type.username} required />
            </label>
            <label htmlFor={shared.email}>
              <div>
                {shared.email}
              </div>
              <input type="text" name={shared.email} id={shared.email} required />
            </label>
          </FormContainer>
          <input type="submit" value="Submit" />
        </form>

        <ModalClose
          // onClick={clickExit}
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
