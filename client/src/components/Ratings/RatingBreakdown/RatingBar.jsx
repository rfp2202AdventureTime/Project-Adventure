import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function RatingBar({ scorePerct, id }) {
  return (
    <RatingBarCONT>
      <StarLink>
        {`${id} Star`}
      </StarLink>
      <GreyBar className="w3-light-grey">
        <GreenBar
          className="w3-green"
          width={scorePerct}
        />
      </GreyBar>
    </RatingBarCONT>

  );
}

// Style components

const RatingBarCONT = styled.div`
  // display: flex;
  // flex-direction: row;
  // align-content: flex-start;
padding : 0 0.5rem 0.5rem 0.5rem ;

`;

const StarLink = styled.div`
`;

const GreyBar = styled.div`
`;

const GreenBar = styled.div`
  height: 1rem;
  width: ${(props) => props.width};
`;

RatingBar.propTypes = {
  scorePerct: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
