// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

export default function Search() {
  return (
    <SearchSection>
      <h3>Search Bar</h3>
      <form>
        <label htmlFor="QASearchText">
          <span>Search Q & A: </span>
          <input type="text" name="QASearchText" id="QASearchText" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </SearchSection>
  );
}

const SearchSection = styled.section`
  background-color: ${(props) => props.theme.colors.background}
`;
