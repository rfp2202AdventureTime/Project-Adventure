import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useData } from './QAContext';
import NewForm from '../../contexts/NewForm';
import { ClickableText } from '../../contexts/Shared.styled';
import { useCurrentProductId, useCurrentProduct } from '../../contexts/ProductIDContext';
import Console from '../../Console';

import QAAnswer from './QAAnswer';

export default function QAItem({ question, allAnswers }) {
  const { currentProduct } = useCurrentProduct();
  const { currentProductId } = useCurrentProductId();
  const setGlobalAData = useData().setAData;
  const globalQData = useData().qData;
  const setGlobalQData = useData().setQData;
  const [numAsToRender, setNumAsToRender] = useState(2);
  const [moreAsClicked, setMoreAsClicked] = useState(true);
  const [disableHelpfulQuestion, setdisableHelpfulQuestion] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filteredAnswers = allAnswers.filter(
    (answer) => answer.question === question.question_id.toString(),
  );
  let arrayOfAnswers;
  const totalAsToRender = [];
  const compareAnswersForSeller = (a, b) => {
    if (a.answerer_name === 'Seller' && b.answerer_name !== 'Seller') {
      return -1;
    } if (a.answerer_name !== 'Seller' && b.answerer_name === 'Seller') {
      return 1;
    } return 0;
  };

  if (filteredAnswers.length > 0 && filteredAnswers[0].results.length > 0) {
    arrayOfAnswers = filteredAnswers[0].results;
    arrayOfAnswers.sort(compareAnswersForSeller);
    for (let i = 0; i < Math.min(numAsToRender, arrayOfAnswers.length); i += 1) {
      totalAsToRender.push([arrayOfAnswers[i], []]);
      if (arrayOfAnswers[i].photos[0] !== undefined) {
        for (let p = 0; p < arrayOfAnswers[i].photos.length; p += 1) {
          totalAsToRender[i][1].push(arrayOfAnswers[i].photos[p]);
        }
      }
    }
  }
  const handleQuestionHelpful = (category, ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:3000/qa/questions/${ID}/${category}`,
    })
      .then((response) => {
        Console.log(response.status);
        const copyAllQuestions = [...globalQData];
        for (let i = 0; i < copyAllQuestions.length; i += 1) {
          if (copyAllQuestions[i].question_id === ID) {
            copyAllQuestions[i].question_helpfulness += 1;
            setGlobalQData(copyAllQuestions);
          }
        }
      })
      .catch((err) => {
        Console.log(err);
      });
  };

  return (
    <QAItemSection>
      <QAItemFullQuestion>
        <QAItemQuestionLeft>
          {`Q: ${question.question_body}`}
        </QAItemQuestionLeft>
        <QAItemQuestionRight>
          {'Helpful? '}
          {(!disableHelpfulQuestion) ? (
            <ClickableText
              disabled={disableHelpfulQuestion}
              onClick={() => {
                setdisableHelpfulQuestion(true);
                handleQuestionHelpful('helpful', question.question_id);
              }}
            >
              Yes
            </ClickableText>
          ) : (<span>Yes</span>)}
          {` (${question.question_helpfulness}) | `}
          <ClickableText
            value="add answer"
            onClick={toggleModal}
          >
            Add Answer
          </ClickableText>
          <NewForm
            // ${question.question_id}
            formtype={`qa/questions/${currentProductId}/answers`}
            productName={currentProduct?.name}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </QAItemQuestionRight>
      </QAItemFullQuestion>

      {totalAsToRender === undefined ? '' : totalAsToRender.map((answer, index) => (
        <QAAnswer
          answer={answer}
          allAnswers={allAnswers}
          setGlobalAData={setGlobalAData}
          question={question}
          key={index}
        />
      ))}

      {(moreAsClicked && totalAsToRender[0] !== undefined) ? (
        <span>
          <strong
            onClick={() => {
              setNumAsToRender(arrayOfAnswers.length);
              setMoreAsClicked(false);
            }}
          >
            Load More Answers
          </strong>
        </span>
      ) : ((!moreAsClicked) && totalAsToRender[0] !== undefined) ? (
        <span>
          <strong
            onClick={() => {
              setNumAsToRender(2);
              setMoreAsClicked(true);
            }}
          >
            Collapse Answers
          </strong>
        </span>
      ) : (
        <p>* No Answers for this question *</p>
      )}
      <br />
    </QAItemSection>
  );
}

const QAItemSection = styled.div`
display: flex;
flex-direction: column;
margin: 0.4rem 0.8rem 0.4rem 0.8rem;
padding: 0.25rem 1rem 0.25rem 1rem;
background-color: ${({ theme }) => theme.colors.offWhite};
&:hover {
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;

const QAItemFullQuestion = styled.div`
  background-color: ${(props) => props.theme.colors.offWhite};
  display: flex;
  flex-direction: row;
`;

const QAItemQuestionLeft = styled.span`
  background-color: ${(props) => props.theme.colors.offWhite};
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight:bold;
  width: 80%;
  float: right;
`;

const QAItemQuestionRight = styled.span`
  background-color: ${(props) => props.theme.colors.offWhite};
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 20%;
  float: right;
`;

QAItem.propTypes = {
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
