// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Search({
  setSearchQuestionBody,
  searchQuesitonBody,
  setsubmitSearchQuestionBody,
}) {
  return (
    <SearchSection>
      <h3>Search Bar</h3>
      <form onSubmit={((e) => {
        e.preventDefault();
        setsubmitSearchQuestionBody(searchQuesitonBody);
      })}
      >
        <label htmlFor="QASearchText">
          <span>Search Q & A: </span>
          <input
            type="text"
            name="QASearchText"
            value={searchQuesitonBody}
            id="QASearchText"
            onChange={(e) => { setSearchQuestionBody(e.target.value); }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </SearchSection>
  );
}

const SearchSection = styled.section`
  background-color: ${(props) => props.theme.colors.background}
`;

Search.propTypes = {
  setSearchQuestionBody: PropTypes.func.isRequired,
  searchQuesitonBody: PropTypes.string.isRequired,
  setsubmitSearchQuestionBody: PropTypes.func.isRequired,
};
