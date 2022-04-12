import React, { useState } from 'React';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
// import Console from '../../Console';

// formtype: review, question
export default function NewForm(formtype, productName) {
  const [showModal, setShowModal] = useState(false);
  const review ={
    summary:'Review summary',
    body: 'Review body',
    photo: 'Upload your photos',
  };
  const sharedQuestionInput = {
    summary: 'Ask Your Question',
    body: 'Your Question: ',
    // username: 'What is your nickname',
    // email: 'Your email',
  };
  const sharedAnswerInput = {
    summary: 'Your Answer',
    body: 'Your Question: ',
    // username: 'What is your nickname',
    // email: 'Your email',
    photo: 'Upload your photos'
  };
  const shared = {
    username: 'What is your nickname',
    email: 'Your email',
  };

  const addtionalReviewInput = {};


  const clickExit = () => {
    setShowModal(false);
  };

  return (
    <ModalParent
      className="ModalParent"
      showModal={showModal}
    >
      <Modal
        className="Modal"
        showModal={showModal}
      >
        <div>{TitleOfPage}</div>
        {addtionalReviewInput}
        <div>Placeholder</div>
        <form>
          <label htmlFor={formtype.summary}>
            {formtype.summary}
            <input type="text" name="summary" id={formtype.summary} required/>
          </label>
          <label htmlFor={formtype.body}>
            {formtype.body}
            <input type="text" name="body" id={formtype.body} required/>
          </label>
          <label htmlFor={shared.username}>
            {formtype.username}
            <input type="text" name={formtype.username} id={formtype.username} required />
          </label>
          <label htmlFor={shared.email}>
            {shared.email}
            <input type="text" name={shared.email} id={shared.email} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <NewFormSection />
        <ModalClose
          onClick={clickExit}
        >
          &times;
        </ModalClose>
      </Modal>
    </ModalParent>
  );
  // add new stuff
  }

const NewFormSection = styled.div`

`;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};
