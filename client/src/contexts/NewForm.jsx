/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Console from '../Console';
import ReviewInput from '../components/Ratings/Review/ReviewInput';
import { Modal, ModalParent, ModalClose } from './Shared.styled';
import { useMeta } from './ReviewMeta';
import { ProductIDContext } from './ProductIDContext';

export default function NewForm({
  formtype, productName, showModal, setShowModal, ...args
}) {
  let type;
  let bodyNote;
  const meta = useMeta();
  const factorList = (meta) ? meta.characteristics : {};
  // CONFIRM WITH ALEX this default won't imapct his section
  const [data, setData] = useState({ recommendation: 'true' });
  const [photos, setPhotos] = useState([]);
  const productId = useContext(ProductIDContext);
  const handleChange = (e) => setData((prevState) => (
    { ...prevState, [e.target.name]: e.target.value }));

  useEffect(() => {
    const espExit = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', espExit);
    return () => window.removeEventListener('keydown', espExit);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // customize data input if this is review submission
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
      newData.photos = photos;
      if (
        !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        || email.length > 60
        || email.length === 0
      ) {
        alert('Please make sure email is in proper format ex. \'hello@hello.com');
        return false;
      }
      axios({
        method: 'post',
        url: `/${formtype}`,
        data: newData,
      }).then(() => {
        // alert('submitted');
        const { setSort, changeSelected } = args;
        setSort('newest');
        changeSelected();
        // reset modal and close
        setData({ recommendation: 'true' });
        setPhotos([]);
        setShowModal(false);
        return null;
      })
        .catch((err) => Console.log(err));
    } else if (formtype === 'qa/questions/') {
      const newData = {};
      const {
        body, email, name,
      } = data;
      newData.body = body;
      newData.name = name;
      newData.email = email;
      newData.product_id = productId;
      axios({
        method: 'post',
        url: `/${formtype}`,
        data: newData,
      })
        .then((response) => {
          Console.log('Question POST status: ', response.status);
        })
        .catch((err) => Console.log(err));
    } else {
      console.log('in the answers')
      console.log(formtype)
      const newData = {};
      const {
        body, email, name,
      } = data;
      newData.body = body;
      newData.name = name;
      newData.email = email;
      newData.photos = [];
      axios({
        method: 'post',
        url: `/${formtype}`,
        data: newData,
      })
        .then((response) => {
          Console.log('Answer POST status: ', response.status);
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

  // TODO: make this dynapmic for all post
  const sharedQuestionInput = {
    title: 'Ask Your Question',
    subtitle: `About the ${productName}`,
    body: 'Your Question: ',
    product_id: productId,
  };

  const sharedAnswerInput = {
    title: 'Submit Your Answer',
    // subtitle: `${productName}:${questionBody}`,
    body: 'Your Answer: ',
    photo: 'Upload your photos',
  };

  const shared = {
    username: 'What is your nickname*',
    email: 'Your email*',
  };

  if (formtype === 'reviews') {
    type = reviews;
  } else if (formtype === 'qa/questions/') {
    type = sharedQuestionInput;
  } else {
    type = sharedAnswerInput;
  }
  const clickExit = () => {
    setShowModal(false);
  };

  // body note validation
  if (data.body && data.body.length > 50) {
    bodyNote = (
      <Note>
        Minimum reached
      </Note>
    );
  } else {
    bodyNote = (
      <Note>
        Minimum required characters left:
        {' '}
        {
          (data.body) ? (50 - data.body.length) : 50
        }
      </Note>
    );
  }

  return (
    <ModalParent
      className="ModalParent"
      showModal={showModal}
    >
      <FormModal
        className="Modal"
        showModal={showModal}
        type={type}
      >
        <FormContainer>
          <form name="newForm" onChange={handleChange} onSubmit={handleOnSubmit}>
            <StickyTop>
              <h2>{type.title}</h2>
              <h3>{type.subtitle}</h3>
              <input className="submitButton" type="submit" value="Submit" />
            </StickyTop>
            {(formtype === 'reviews') ? (
              <ReviewInput
                data={data}
                handleChange={handleChange}
                setPhotos={setPhotos}
                photos={photos}
              />
            ) : ''}
            <QuestionBlockBody>
              <label htmlFor={type.body}>
                <b>
                  {type.body}
                </b>
                <div>
                  <textarea
                    name="body"
                    placeholder={type.bodyPlaceholder}
                    maxLength="1000"
                    minLength="50"
                    required
                  />
                </div>
                {bodyNote}
              </label>
            </QuestionBlockBody>
            <QuestionBlock>
              <label htmlFor={shared.username}>
                <b>
                  {shared.username}
                </b>
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength="60"
                    placeholder="Example: jackson11!"
                  />
                </div>
                <Note>
                  For privacy reasons, do not use your full name or email address
                </Note>
              </label>
            </QuestionBlock>
            <QuestionBlock>
              <label htmlFor={shared.email}>
                <b>
                  {shared.email}
                </b>
                <div>
                  <input
                    type="text"
                    name="email"
                    required
                    maxLength="60"
                    placeholder="Example: jackson11@email.com"
                  />
                </div>
                <Note>
                  For authentication reasons, you will not be emailed
                </Note>
              </label>
            </QuestionBlock>
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
  padding-bottom: 2rem;
`;
const StickyTop = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  justify-content: center;
  top:0;
  width:100%;
  z-index:9997;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.light}
`;

const FormModal = styled(Modal)`
  overflow:scroll;
`;

const Note = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  padding: 0.5rem;
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
  setShowModal: PropTypes.func.isRequired,
};

NewForm.defaultProps = {
  productName: null,
};
