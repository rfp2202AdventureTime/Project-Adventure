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
    for (let i = 0; i < Math.min(numQsToRender, filteredQData.length); i += 1) {
      totalQsToRender.push(filteredQData[i]);
    }
  }
  console.log(totalQsToRender);
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
      <span>
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
      </span>

    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
`;

const MoreAnswersButton = styled.button`
background: transparent;
border: 2px solid ${(props) => props.theme.colors.primary};
color: ${(props) => props.theme.colors.primary};
margin: 0 1em;
padding: 0.25em 1em;
width: 250px;
height: 75px;
color: black;
font-weight: bolder;
`;

Feed.propTypes = {
  submitSearchQuestionBody: PropTypes.string.isRequired,
};
