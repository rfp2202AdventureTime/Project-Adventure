import { React, useContext } from 'react';
import styled from 'styled-components';
import sampleFeatures from '../sampledata/sampleFeatures';
import Features from './Features';
import { ProductIDContext } from '../../../contexts/ProductIDContext';
import { useFeature } from './FeatureContext';

// should get an array with two arrays of features from each item
function Comparison() {
  // const item1 = sampleFeatures[0];
  // const item2 = sampleFeatures[1];

  const twoProductsArray = useFeature();

  if (twoProductsArray) {
    const item1 = twoProductsArray.data[0].data;
    const item2 = twoProductsArray.data[1].data;

    console.log(item1, 'this is item1');
    console.log(item2, 'this is item2');

    return (
      <Testing>
        <div>

          <Features item1={item1} item2={item2} />

        </div>
      </Testing>

    );
  }
}

const Testing = styled.div`
  border-style: solid;
  height: max-content;
  width: max-content;
`;

const Featstyle = styled.td`
  align-items: center;
  width: max-content;
`;
export default Comparison;
