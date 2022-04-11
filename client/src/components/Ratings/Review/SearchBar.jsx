import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SearchBar({ handleSearch, resetSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    if (keyword.length > 2) {
      handleSearch(keyword);
    } else {
      resetSearch();
    }
  };

  return (
    <SearchBarBlock>
      Filter Review
      <input
        type="text"
        value={searchTerm}
        onChange={search}
        placeholder="Search Reviews"
      />
    </SearchBarBlock>
  );
}

// Style components

const SearchBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0.8rem 0.1rem 0.8rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  font-size: medium;
  gap: 0.4rem;
`;

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
