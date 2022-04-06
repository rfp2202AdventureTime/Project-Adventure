import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useData } from './QAContext';
import QAItem from './QAItem';

export default function Feed({ submitSearchQuestionBody }) {
  const fullQAData = useData();
  let filteredFullQAData = useData();
  if (fullQAData !== null) {
    filteredFullQAData = fullQAData.filter(
      (question) => question.question_body.includes(submitSearchQuestionBody),
    );
  }
  // console.log(filteredFullQAData);
  return (
    <FeedSection>
      <h1>Feed</h1>
      <ul>
        {filteredFullQAData === null ? 'Loading...' : filteredFullQAData.map(
          (question) => <QAItem question={question} key={question.question_id} />,
        )}
      </ul>
    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

Feed.propTypes = {
  submitSearchQuestionBody: PropTypes.string.isRequired,
};
