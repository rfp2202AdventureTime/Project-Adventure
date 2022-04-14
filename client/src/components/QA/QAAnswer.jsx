import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useData } from './QAContext';
import { ClickableText } from '../../contexts/Shared.styled';

import QAPhoto from './QAPhoto';

export default function QAAnswer({
  allAnswers,
  answer,
  setGlobalAData,
  question,
}) {
  const [reported, setReported] = useState(false);
  const [disableHelpfulAnswer, setdisableHelpfulAnswer] = useState(false);
  const globalQData = useData().qData;

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
    <QAItemAnswer key={answer[0].answer_id}>
      <span>
        <strong>A: </strong>
        {answer[0].body}
      </span>
      <QAItemAnswerPostInfo>
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
          {(!disableHelpfulAnswer) ? (
            <ClickableText
              disabled={disableHelpfulAnswer}
              onClick={() => {
                setdisableHelpfulAnswer(true);
                handleHelpfulAnswer('helpful', answer[0].answer_id);
              }}
            >
              Yes
            </ClickableText>
          ) : (<span>Yes</span>)}
          {` (${answer[0].helpfulness}) | `}
          {(!reported) ? (
            <ClickableText
              onClick={() => handleReport('report', answer[0].answer_id)}
            >
              Report
            </ClickableText>
          ) : (<span>Report</span>)}
        </span>
      </QAItemAnswerPostInfo>
      {(answer[1][0] !== undefined) && (
        <QAPhotoContainer>
          { answer[1].map((photos) => (
            <QAPhoto
              test={photos}
              url={photos.url}
              key={photos.id}
            />
          ))}
        </QAPhotoContainer>
      )}
    </QAItemAnswer>
  );
}

const QAItemAnswer = styled.div`
  background-color: ${(props) => props.theme.colors.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 3px;
  padding-top: 10px;
`;

const QAItemAnswerPostInfo = styled.div`
  font-size: small;
  color: #5a5a5a;
`;

const QAPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 550px;
  padding: 10px 0;
`;

QAAnswer.propTypes = {
  answer: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  setGlobalAData: PropTypes.func.isRequired,
};
