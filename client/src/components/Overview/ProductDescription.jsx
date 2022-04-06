import React from 'react';
import styled from 'styled-components';

function ProductDescription() {
  return (
    <DescriptionContainer>
      <LongDescription>
        <h3>
          Product Slogan. Pithy Description Or Catchphrase.
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </LongDescription>
      <Features>
        <ul>
          <li>First feature</li>
          <li>This is another cool feature!</li>
          <li>Here is another feature</li>
          <li>Last feature</li>
        </ul>
      </Features>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.section`
  color: ${(props) => props.theme.colors.secondary};
  display: block;
  padding: 50px 100px;
  & p {
    padding-top: 10px;
  }
`;

const LongDescription = styled.div`
  display: inline-block;
  width: 70%;
`;

const Features = styled.div`
  display: inline-block;
  width: 30%;
`;

export default ProductDescription;
