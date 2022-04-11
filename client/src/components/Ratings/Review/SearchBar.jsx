import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (e) => {
    const currentSearch = e.target.value;
    setSearchTerm(currentSearch);
    if (currentSearch.length > 2) {
      handleSearch(currentSearch);
    }
  };

  // useEffect(() => {

  // }, []);

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
};
