import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useData } from './QAContext';
import QAItem from './QAItem';

export default function Feed({ submitSearchQuestionBody }) {
  const [numQsToRender, setNumQsToRender] = useState(2);
  const [moreQsClicked, setMoreQsClicked] = useState(true);
  const questionData = useData().qData;
  const answerData = useData().aData;
  let filteredQData = questionData;
  const totalQsToRender = [];

  if (questionData !== null) {
    filteredQData = questionData.filter(
      (question) => question.question_body.includes(submitSearchQuestionBody),
    );
    for (let i = 0; i < numQsToRender; i += 1) {
      totalQsToRender.push(filteredQData[i]);
    }
  }

  return (
    <FeedSection>
      {totalQsToRender === [] ? 'Loading...' : totalQsToRender.map(
        (question) => (
          <QAItem
            question={question}
            allAnswers={answerData}
            key={question.question_id}
          />
        ),
      )}
      {moreQsClicked && (
        <button
          type="submit"
          onClick={() => {
            setNumQsToRender(filteredQData.length);
            setMoreQsClicked(false);
          }}
        >
          Load More Questions
        </button>
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
