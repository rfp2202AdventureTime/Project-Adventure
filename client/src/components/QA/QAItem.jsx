import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function QAItem({ question }) {
  return (
    <QAItemSection>
      <li>{question.asker_name}</li>
      <li>{question.question_body}</li>
      <li>{question.question_date}</li>
      <li>{question.question_helpfulness}</li>
      {<li>{question.reported}</li> && question.reported}
      <br />
    </QAItemSection>
  );
}

const QAItemSection = styled.section`
  background-color: ${(props) => props.theme.colors.background}
`;

QAItem.propTypes = {
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
