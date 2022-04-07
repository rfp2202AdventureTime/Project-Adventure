import React from 'react';
import sampleFeatures from './sampleFeatures';

function Features({ features }) {
  // const values = sampleFeatures.features;
  console.log(features[0].features, 'this is features');
  const test = features[0].features;
  return (
    <div>
      {test.map((item) => (
        <tr>
          {item.feature}
          :
          {' '}
          {item.value}
        </tr>
      ))}
    </div>
  );
}

export default Features;
