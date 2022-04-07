import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import { useData } from './QAContext';

export default function QAItem({ question, allAnswers }) {
  const setGlobalAData = useData().setAData;
  const globalQData = useData().qData;
  const setGlobalQData = useData().setQData;
  const [numAsToRender, setNumAsToRender] = useState(2);
  const [moreAsClicked, setMoreAsClicked] = useState(true);
  const [reported, setReported] = useState(false);
  const filteredAnswers = allAnswers.filter(
    (answer) => answer.question === question.question_id.toString(),
  );
  let arrayOfAnswers;
  const totalAsToRender = [];
  if (filteredAnswers.length > 0 && filteredAnswers[0].results.length > 0) {
    arrayOfAnswers = filteredAnswers[0].results;
    for (let i = 0; i < Math.min(numAsToRender, arrayOfAnswers.length); i += 1) {
      totalAsToRender.push(arrayOfAnswers[i]);
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
          <u onClick={(e) => handleQuestionHelpful('helpful', question.question_id)}>Yes</u>
          {` (${question.question_helpfulness}) | `}
          <u value='add answer' onClick={(e) => console.log('Clicked Add Answer')}>Add Answer</u>
        </QAItemQuestionRight>
      </QAItemFullQuestion>
      {totalAsToRender === undefined ? '' : totalAsToRender.map((answer) => (
        <QAItemAnswer key={answer.answer_id}>
          <span>
            <strong>A: </strong>
            {answer.body}
          </span>
          <span>
            {`by `} {answer.answerer_name === 'Seller' ?
              <strong>{answer.answerer_name}</strong>
              : `${answer.answerer_name}`
            }
            {`${moment(answer.date).format('MMMM DD, YYYY')} |
            Helpful? `}
            <u onClick={(e) => handleHelpfulAnswer('helpful', answer.answer_id)}>Yes</u>
            {` (${answer.helpfulness}) | `}
            {!reported && <u onClick={(e) => handleReport('report', answer.answer_id)}>Report</u>}
          </span>
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

QAItem.propTypes = {
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
