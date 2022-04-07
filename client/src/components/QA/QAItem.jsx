import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import { useData } from './QAContext';

export default function QAItem({ question, allAnswers }) {
  const setGlobalAData = useData().setAData;
  const [numAsToRender, setNumAsToRender] = useState(2);
  const [moreAsClicked, setMoreAsClicked] = useState(true);
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

  console.log(allAnswers);
  // category will be if the click was for helpful or reported
  const handleQuestionInteraction = (category, ID) => {
    console.log(category);
    console.log(ID);
    axios({
      method: 'PUT',
      url: `http://localhost:3000/qa/questions/${ID}/${category}`,
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAnswerInteraction = (category, ID) => {
    console.log(category);
    console.log(ID);
    axios({
      method: 'PUT',
      url: `http://localhost:3000/qa/answers/${ID}/${category}`,
    })
      .then((response) => {
        console.log(response.status);
        const copyAllAnswers = [...allAnswers];
        console.log(copyAllAnswers);
        console.log('start');
        for (let i = 0; i < copyAllAnswers.length; i += 1) {
          console.log(copyAllAnswers);
          if (copyAllAnswers[i].question === question.question_id.toString()) {
            console.log(copyAllAnswers[i].results);
            for (let j = 0; j < copyAllAnswers[i].results.length; j += 1) {
              console.log(copyAllAnswers[i].results[j].answer_id);
              console.log(ID);
              if (copyAllAnswers[i].results[j].answer_id === ID) {
                copyAllAnswers[i].results[j].helpfulness += 1;
                console.log('here');
                console.log(copyAllAnswers);
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

  return (
    <QAItemSection>
      <QAItemFullQuestion>
        <QAItemQuestionLeft>
          {`Q: ${question.question_body}`}
        </QAItemQuestionLeft>
        <QAItemQuestionRight>
          {'Helpful? '}
          <u onClick={(e) => handleQuestionInteraction('helpful', question.question_id)}>Yes</u>
          {` (${question.question_helpfulness}) | `}
          <u value='add answer' onClick={(e) => console.log('Clicked Add Answer')}>Add Answer</u>
        </QAItemQuestionRight>
      </QAItemFullQuestion>
      {totalAsToRender === undefined ? '' : totalAsToRender.map((answer) => (
        <QAItemAnswer>
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
            <u onClick={(e) => handleAnswerInteraction('helpful', answer.answer_id)}>Yes</u>
            {` (${answer.helpfulness}) | `}
            <u onClick={(e) => handleAnswerInteraction('report', answer.answer_id)}>Report</u>
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
        <p1>* No Answers for this question *</p1>
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
