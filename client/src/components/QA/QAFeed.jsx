import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useData } from './QAContext';
import QAItem from './QAItem';

export default function Feed({ submitSearchQuestionBody }) {
  const questionData = useData().qData;
  const answerData = useData().aData;
  let filteredQData = questionData;

  if (questionData !== null) {
    filteredQData = questionData.filter(
      (question) => question.question_body.includes(submitSearchQuestionBody),
    );
  }
  return (
    <FeedSection>
      {filteredQData === null ? 'Loading...' : filteredQData.map(
        (question) => (
          <QAItem
            question={question}
            allAnswers={answerData}
            key={question.question_id}
          />
        ),
      )}
    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
`;

Feed.propTypes = {
  submitSearchQuestionBody: PropTypes.string.isRequired,
};
