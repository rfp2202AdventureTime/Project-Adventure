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
      <form onSubmit={((e) => {
        e.preventDefault();
        // console.log(searchQuesitonBody);
        setsubmitSearchQuestionBody(searchQuesitonBody);
      })}
      >
        <SearchBox
          type="text"
          name="QASearchText"
          placeholder="Search questions ...."
          value={searchQuesitonBody}
          id="QASearchText"
          onChange={(e) => { setSearchQuestionBody(e.target.value); }}
        />
        <input type="submit" value="Submit" />
      </form>
    </SearchSection>
  );
}

const SearchSection = styled.div`
  background-color: ${(props) => props.theme.colors.light}
  display: flex;
  flex-direction: row;
  padding-left: 25%;
`;

const SearchBox = styled.input`
  background: ${(props) => props.theme.colors.background};
  border-radius: 30px;
  border: 0px;
  width: 600px;
  height: 60px;
  &::placeholder {
    color: black;
  }
  padding:15px;
`;

Search.propTypes = {
  setSearchQuestionBody: PropTypes.func.isRequired,
  searchQuesitonBody: PropTypes.string.isRequired,
  setsubmitSearchQuestionBody: PropTypes.func.isRequired,
};
