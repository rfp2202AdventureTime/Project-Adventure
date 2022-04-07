import React from 'react';

function Features({ features }) {
  // const values = sampleFeatures.features;
  console.log(features, 'this is features');

  const testArray = [];

  for (let i = 0; i < features.length; i += 1) {
    features[i].features.map((item) => {
      testArray.push(item);
    });
  }

  console.log(testArray, 'this is test array');

  return (
    <tr>

      <td>{ }</td>
      {testArray.map((item) => (
        <tr>
          {item.feature}

          {' '}
          {item.value ? `: ${item.value}` : ' '}
        </tr>
      ))}
      <td>{} </td>
    </tr>
  );
}

export default Features;
