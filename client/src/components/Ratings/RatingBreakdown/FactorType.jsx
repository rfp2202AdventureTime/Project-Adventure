import React from 'react';
import PropTypes from 'prop-types';

export default function FactorList({ factor }) {
  const factorSummary = {
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Poor', '', 'Perfect'],
    Quality: ['Poor', '', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs big'],
  };

  return (
    factorSummary[factor].map((characteristic, index) => (
      <div key={factor.concat(index)}>
        {characteristic}
      </div>
    ))

  );
}

FactorList.propTypes = {
  factor: PropTypes.string.isRequired,
};
