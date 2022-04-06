import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function QAItem({ question, allAnswers }) {
  const filteredAnswers = allAnswers.filter(
    (answer) => answer.question === question.question_id.toString(),
  );
  let arrayOfAnswers;
  if (filteredAnswers.length > 0 && filteredAnswers[0].results.length > 0) {
    arrayOfAnswers = filteredAnswers[0].results;
  }
  console.log(arrayOfAnswers);
  return (
    <QAItemSection>
      <li>{question.question_body}</li>
      {arrayOfAnswers === undefined ? '' : arrayOfAnswers.map((answer) => <ol>{answer.body}</ol>)}
      {/* <li>{question.asker_name}</li>
      <li>{question.question_date}</li>
      <li>{question.question_helpfulness}</li>
      {<li>{question.reported}</li> && question.reported} */}
      <br />
    </QAItemSection>
  );
}

const QAItemSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flexbox;
  flex-direction: column;
  justify-content: space-around;
`;

QAItem.propTypes = {
  question: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
