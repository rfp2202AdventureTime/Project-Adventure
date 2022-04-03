import React from 'react';
import styled from 'styled-components';

export default function Star() {
  return (
    <RatingsSection>

    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
