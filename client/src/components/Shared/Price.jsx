import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Price({ original, discount }) {
  if (discount) {
    return (
      <>
        <OldPrice>
          $
          { original }
        </OldPrice>
        &nbsp;
        <DiscountPrice>
          $
          { discount }
        </DiscountPrice>
      </>
    );
  }
  return (
    <CurrentPrice>
      $
      { original }
    </CurrentPrice>
  );
}

const CurrentPrice = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const DiscountPrice = styled.span`
  color: red;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.secondary};
`;

Price.propTypes = {
  original: PropTypes.string.isRequired,
  discount: PropTypes.string,
};

Price.defaultProps = {
  discount: null,
};

export default Price;
