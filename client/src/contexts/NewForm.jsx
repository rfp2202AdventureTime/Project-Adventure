/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Console from '../Console';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
import { useMeta } from './ReviewMeta';
import { ProductIDContext } from './ProductIDContext';

export default function NewForm({
  formtype, productName, showModal, toggleModal,
}) {
  let type;
  const meta = useMeta();
  const factorList = (meta) ? meta.characteristics : {};
  // CONFIRM WITH ALEX this default won't imapct his section
  const [data, setData] = useState({ recommendation: 'true' });
  const [photo, setPhoto] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const productId = useContext(ProductIDContext);

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
  // console.log(data);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formtype === 'reviews') {
      const newData = {};
      const {
        body, email, summary, name,
      } = data;
      const factorData = {};
      Object.keys(data).forEach((key) => {
        if (factorList[key]) {
          factorData[factorList[key].id] = Number(data[key]);
        }
        if (key === 'rating') {
          newData.rating = Number(data[key]);
        }
      });

      newData.characteristics = factorData;
      newData.product_id = productId;
      newData.body = body;
      newData.email = email;
      newData.summary = summary;
      newData.name = name;
      newData.recommend = (data.recommendation === 'true');
      newData.photos = [];
      axios({
        method: 'post',
        url: `/${formtype}`,
        data: newData,
      })
        .catch((err) => Console.log(err));
    } else {
      axios({
        method: 'post',
        url: `/${formtype}`,
        data,
      })
        .catch((err) => Console.log(err));
    }
  };

  const reviews = {
    title: 'Write Your Review',
    subtitle: `About the ${productName}`,
    body: 'Review body*',
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

  const shared = {
    username: 'What is your nickname*',
    email: 'Your email*',
  };

  if (formtype === 'reviews') {
    type = reviews;
  } else if (formtype === 'question') {
    type = sharedQuestionInput;
  } else if (formtype === 'answer') {
    type = sharedAnswerInput;
  }
  const clickExit = () => {
    toggleModal();
  };

  const togglePhotoModal = () => {
    setShowPhotoModal(true);
  };

  const exitPhotoModal = () => {
    setShowPhotoModal(false);
  };
console.log(showPhotoModal);
  const starRating = (
    <div className="rating">
      <input type="radio" name="rating" id="rating-5" value={5} />
      <label htmlFor="rating-5" />
      <input type="radio" name="rating" id="rating-4" value={4} />
      <label htmlFor="rating-4" />
      <input type="radio" name="rating" id="rating-3" value={3} />
      <label htmlFor="rating-3" />
      <input type="radio" name="rating" id="rating-2" value={4} />
      <label htmlFor="rating-2" />
      <input type="radio" name="rating" id="rating-1" value={1} />
      <label htmlFor="rating-1" />
    </div>
  );

  const factorSummaryInput = (
    Object.keys(factorList).map((factor, i) => (
      <div key={factor.concat(i)}>
        {factor}
        <RadioBar>
          {factorSummary[factor].map((characteristic, index) => (
            <RadioBlock key={characteristic.concat(index)}>
              <div>
                <input
                  type="radio"
                  name={factor}
                  value={index + 1}
                  required
                />
              </div>
              <Characteristic>
                <label
                  htmlFor={characteristic.concat(index + 1)}
                >
                  {' '}
                  {characteristic}
                </label>
              </Characteristic>
            </RadioBlock>
          ))}
        </RadioBar>
      </div>
    ))
  );

  const addtionalReviewInput = (formtype === 'reviews') ? (
    <>
      <QuestionBlock>
        <label htmlFor="rating">
          <b>
            Overall rating*
          </b>
          {starRating}
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor="recommendation">
          <b>
            Do you recommendation this product*
          </b>
          <div>
            <input type="radio" name="recommendation" value="true" defaultChecked onChange={handleChange} />
            <label htmlFor="yes">{' Yes'}</label>
          </div>
          <div>
            <input type="radio" name="recommendation" value="false" />
            <label htmlFor="no">{' No'}</label>
          </div>
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor="characteristics">
          <b>
            Characteristics*
          </b>
          {factorSummaryInput}
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor={type.phtot}>
          <b>
            { 'Add your photo ' }
          </b>
          <button type="button" onClick={togglePhotoModal}>
            Add
          </button>
          <ModalParent
            showModal={showPhotoModal}
          >
            <PhotoModal
              showModal={showPhotoModal}
            >
              test
              <ModalClose
                onClick={exitPhotoModal}
              >
                &times;
              </ModalClose>
            </PhotoModal>
          </ModalParent>
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor={type.summary}>
          <b>
            Review Summary*
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

  return (
    <ModalParent
      className="ModalParent"
      showModal={showModal}
    >
      <FormModal
        className="Modal"
        showModal={showModal}
      >
        <FormContainer>
          <h2>{type.title}</h2>
          <h3>{type.subtitle}</h3>
          <form name="newForm" onChange={handleChange} onSubmit={handleOnSubmit}>
            {addtionalReviewInput}
            <QuestionBlockBody>
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
            </QuestionBlockBody>
            <RowBlock>
              <QuestionBlock>
                <label htmlFor={shared.username}>
                  <b>
                    {shared.username}
                  </b>
                  <div>
                    <input type="text" name="name" required />
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
            </RowBlock>

            <input className="submitButton" type="submit" value="Submit" />
          </form>
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
const PhotoModal = styled(Modal)`
  width: 40%
`;

const RadioBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: dotted 2px grey;
  margin-bottom: 1rem;
`;
const RadioBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowBlock = styled(RadioBlock)`
  flex-direction: row;
  justify-content: space-evenly;
`;

const Characteristic = styled.div`
  padding: 1rem;

`;

const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;
const QuestionBlockBody = styled(QuestionBlock)`
  height: 10rem;
`;

NewForm.propTypes = {
  formtype: PropTypes.string.isRequired,
  productName: PropTypes.string,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

NewForm.defaultProps = {
  productName: null,
};
