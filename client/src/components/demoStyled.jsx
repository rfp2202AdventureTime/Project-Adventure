import React from 'react';
import styled from 'styled-components';

const TestTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: ${(props) => (props.testing
    ? 'white' : 'green')};
  `;

const SecondButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  &:hover {
    color: orange;
  }
  `;

const AnotherTitle = styled(TestTitle)`
  font-size: 3em;
  test-align: left;
  color: grey
  `;

export {
  TestTitle,
  Button,
  SecondButton,
  AnotherTitle,
};
