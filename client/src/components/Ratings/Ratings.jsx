import React from 'react';
import styled from 'styled-components';

function Ratings() {
  return (
    <RatingsSection>
      <h1>Ratings and Reviews</h1>
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default Ratings;
