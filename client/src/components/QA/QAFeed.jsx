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
  console.log(questionData);
  console.log(answerData);
  let filteredQData = questionData;
  const totalQsToRender = [];

  if (questionData !== null) {
    filteredQData = questionData.filter(
      (question) => question.question_body.includes(submitSearchQuestionBody),
    );
    for (let i = 0; i < Math.min(numQsToRender, filteredQData.length); i += 1) {
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
      <ButtonBlock>
        {moreQsClicked && (
          <MoreAnswersButton
            type="submit"
            onClick={() => {
              setNumQsToRender(filteredQData.length);
              setMoreQsClicked(false);
            }}
          >
            Load More Questions
          </MoreAnswersButton>
        )}
        <MoreAnswersButton
          onClick={() => { console.log('Nice, you ask a really dumb question'); }}
        >
          Ask a Question +
        </MoreAnswersButton>
      </ButtonBlock>

    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
`;

const MoreAnswersButton = styled.button`
  border: 2px solid;
  text-align: center;
  padding: 1.3rem 1rem 1.3rem 1rem;
  font-size: medium;
  font-weight: 700;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.3rem 1rem 1.3rem 1rem;
`;

Feed.propTypes = {
  submitSearchQuestionBody: PropTypes.string.isRequired,
};
