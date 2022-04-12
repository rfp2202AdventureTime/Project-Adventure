import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import { useData } from './QAContext';

import QAPhoto from './QAPhoto';

export default function QAItem({ question, allAnswers }) {
  const setGlobalAData = useData().setAData;
  const globalQData = useData().qData;
  const setGlobalQData = useData().setQData;
  const [numAsToRender, setNumAsToRender] = useState(2);
  const [moreAsClicked, setMoreAsClicked] = useState(true);
  const [reported, setReported] = useState(false);
  const [disableHelpfulQuestion, setdisableHelpfulQuestion] = useState(false);
  const [disableHelpfulAnswer, setdisableHelpfulAnswer] = useState(false);

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
        console.log(response.status);
        const copyAllQuestions = [...globalQData];
        for (let i = 0; i < copyAllQuestions.length; i += 1) {
          if (copyAllQuestions[i].question_id === ID) {
            copyAllQuestions[i].question_helpfulness += 1;
            setGlobalQData(copyAllQuestions);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHelpfulAnswer = (category, ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:3000/qa/answers/${ID}/${category}`,
    })
      .then((response) => {
        console.log(response.status);
        const copyAllAnswers = [...allAnswers];
        for (let i = 0; i < copyAllAnswers.length; i += 1) {
          if (copyAllAnswers[i].question === question.question_id.toString()) {
            for (let j = 0; j < copyAllAnswers[i].results.length; j += 1) {
              if (copyAllAnswers[i].results[j].answer_id === ID) {
                copyAllAnswers[i].results[j].helpfulness += 1;
                setGlobalAData(copyAllAnswers);
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReport = (category, ID) => {
    axios({
      method: 'PUT',
      url: `http://localhost:3000/qa/answers/${ID}/${category}`,
    })
      .then((response) => {
        console.log(response.status);
        const copyAllQuestions = [...globalQData];
        const copyAllAnswers = [...allAnswers];
        for (let i = 0; i < copyAllAnswers.length; i += 1) {
          if (copyAllAnswers[i].question === question.question_id.toString()) {
            for (let j = 0; j < copyAllAnswers[i].results.length; j += 1) {
              if (copyAllAnswers[i].results[j].answer_id === ID) {
                if (category === 'helpful') {
                  copyAllAnswers[i].results[j].helpfulness += 1;
                  setGlobalAData(copyAllAnswers);
                } else if (category === 'report') {
                  for (let t = 0; t < copyAllQuestions.length; t += 1) {
                    if (copyAllQuestions[t].question_id === question.question_id) {
                      copyAllQuestions[t].reported = true;
                      setReported(true);
                    }
                  }
                }
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
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
          <ClickableText
            disabled={disableHelpfulQuestion}
            onClick={() => {
              setdisableHelpfulQuestion(true);
              handleQuestionHelpful('helpful', question.question_id);
            }}
          >
            Yes
          </ClickableText>
          {` (${question.question_helpfulness}) | `}
          <u value='add answer' onClick={(e) => console.log('Clicked Add Answer')}>Add Answer</u>
        </QAItemQuestionRight>
      </QAItemFullQuestion>
      {totalAsToRender === undefined ? '' : totalAsToRender.map((answer) => (
        <QAItemAnswer key={answer[0].answer_id}>
          <span>
            <strong>A: </strong>
            {answer[0].body}
          </span>
          <span>
            {'by '}
            {answer[0].answerer_name === 'Seller'
              ? (
                <strong>
                  {answer[0].answerer_name}
                </strong>
              )
              : `${answer[0].answerer_name} `}
            {`${moment(answer[0].date).format('MMMM DD, YYYY')} |
            Helpful? `}
            <ClickableText
              disabled={disableHelpfulAnswer}
              onClick={() => {
                setdisableHelpfulAnswer(true);
                handleHelpfulAnswer('helpful', answer[0].answer_id);
              }}
            >
              Yes
            </ClickableText>
            {` (${answer[0].helpfulness}) | `}
            {!reported && (
              <ClickableText
                onClick={() => handleReport('report', answer[0].answer_id)}
              >
                Report
              </ClickableText>
            )}
          </span>
          <QAPhotoContainer>
            { answer[1].map((photos) => (
              <QAPhoto
                test={photos}
                url={photos.url}
                key={photos.id}
              />
            ))}
          </QAPhotoContainer>
        </QAItemAnswer>
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
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 0.2rem dotted rgba(221, 235, 223);
  `;

const QAItemFullQuestion = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: row;
`;

const QAItemQuestionLeft = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight:bold;
  width: 80%;
  float: right;
  `;

const QAItemQuestionRight = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 20%;
  float: right;
`;

const QAItemAnswer = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const QAPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 400px;
  padding: 10px 0;
`;

const ClickableText = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;

QAItem.propTypes = {
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
