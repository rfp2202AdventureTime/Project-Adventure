import styled from 'styled-components';

// Shared by Rating and Q&A
const Button = styled.button`
  border: 2px solid;
  text-align: center;
  padding: 1.3rem 1rem 1.3rem 1rem;
  font-size: medium;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color:${({ theme }) => theme.colors.tertiary}
  }
`;

const ClickableText = styled.button`
  background-color: transparent;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;

export { Button, ClickableText };
