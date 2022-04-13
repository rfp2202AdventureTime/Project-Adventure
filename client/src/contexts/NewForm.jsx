/* eslint-disable jsx-a11y/label-has-associated-control */
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

  const reviews = {
    title: 'Write Your Review',
    subtitle: `About the ${productName}`,
    body: 'Review body:',
    bodyPlaceholder: 'Why did you like the product or not?',
    photo: 'Upload your photos',
  };

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

  if (formtype === 'reviews') {
    type = reviews;
  } else if (formtype === 'question') {
    type = sharedQuestionInput;
  } else if (formtype === 'answer') {
    type = sharedAnswerInput;
  }

  const shared = {
    username: 'What is your nickname?',
    email: 'Your email:',
  };

  const starRating = (
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
  );

  const factorSummaryInput = (
    Object.keys(factorSummary).map((factor, i) => (
      <div key={factor.concat(i)}>
        {factor}
        <RadioBar>
          {factorSummary[factor].map((characteristic, index) => (
            <div key={characteristic.concat(index)}>
              <input
                type="radio"
                name="characteristic"
                value="index"
              />
              <label
                htmlFor={characteristic.concat(index)}
              >
                {' '}
                {index}
              </label>
            </div>
          ))}
        </RadioBar>
      </div>
    ))
  );

  const addtionalReviewInput = (formtype === 'reviews') ? (
    <>
      <b>
        Overall rating?
      </b>
      {starRating}
      <QuestionBlock>
        <label htmlFor="recommendation">
          <b>
            Do you recommendation this product?
          </b>
          <div>
            <input type="radio" name="recommendation" value="yes" checked onChange={handleChange} />
            <label htmlFor="yes">{' Yes'}</label>
          </div>
          <div>
            <input type="radio" name="recommendation" value="no" />
            <label htmlFor="no">{' No'}</label>
          </div>
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor="characteristics">
          <b>
            Characteristics:
          </b>
          {factorSummaryInput}
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor={type.summary}>
          <b>
            Review Summary
          </b>
          <div>
            <input
              type="text"
              name="summary"
              placeholder="Example: Best purchase ever!"
              required
            />
          </div>
        </label>
      </QuestionBlock>
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
        <FormContainer>
          <h2>{type.title}</h2>
          <h3>{type.subtitle}</h3>
          <form onChange={handleChange}>
            {addtionalReviewInput}
            <QuestionBlock>
              <label htmlFor={type.body}>
                <b>
                  {type.body}
                </b>
                <div>
                  <textarea
                    name="body"
                    placeholder={type.bodyPlaceholder}
                  />
                </div>
              </label>
            </QuestionBlock>
            <QuestionBlock>
              <label htmlFor={shared.username}>
                <b>
                  {shared.username}
                </b>
                <div>
                  <input type="text" name="username" required />
                </div>
              </label>
            </QuestionBlock>
            <QuestionBlock>
              <label htmlFor={shared.email}>
                <b>
                  {shared.email}
                </b>
                <div>
                  <input type="text" name="email" required />
                </div>
              </label>
            </QuestionBlock>
          </form>
          <input type="submit" value="Submit" onSubmit={handleOnSubmit} />
        </FormContainer>

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
  position: relative;
  align-items: center;
`;

const FormModal = styled(Modal)`
  overflow:scroll;
`;

const RadioBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
// const RadioBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 0.5rem;
// `;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};
