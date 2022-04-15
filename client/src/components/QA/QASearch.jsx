// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Search({
  setSearchQuestionBody,
  searchQuesitonBody,
}) {
  return (
    <SearchSection>
      <form>
        <SearchBox
          type="text"
          name="QASearchText"
          placeholder="Have a question? Search for answers…"
          value={searchQuesitonBody}
          id="QASearchText"
          onChange={(e) => { setSearchQuestionBody(e.target.value); }}
        />
      </form>
    </SearchSection>
  );
}

const SearchSection = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-bottom:1rem;
  padding-right:0rem;
`;

const SearchBox = styled.input`
  background: ${(props) => props.theme.colors.background};
  max-width: 600px;
  max-height: 60px;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
  border: 0px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }
  padding:15px;
`;

Search.propTypes = {
  setSearchQuestionBody: PropTypes.func.isRequired,
  searchQuesitonBody: PropTypes.string.isRequired,
};
