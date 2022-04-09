import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function AddToCart({ skus }) {
  const [currentSku, setCurrentSku] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(0);
  }, [currentSku]);

  const handleChange = (e) => {
    setCurrentSku(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Size: ${skus[currentSku].size} - Quantity: ${quantity}`);
  };

  return (
    <>
      <SelectSize onChange={handleChange}>
        <option>SIZE</option>
        {Object.keys(skus).map((sku) => (
          <option
            value={sku}
            key={sku}
          >
            {skus[sku].size}
          </option>
        ))}
      </SelectSize>

      <SelectQuantity onChange={handleQuantity}>
        <option>NO STOCK</option>
        {[...Array(5).keys()].map((num) => (
          <option
            value={num + 1}
            key={num + 1}
          >
            {num + 1}
          </option>
        ))}
      </SelectQuantity>

      <AddToCartButton onClick={handleSubmit}>
        Add to Cart
      </AddToCartButton>
    </>
  );
}

const AddToCartButton = styled.button`
  appearance: none;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.light};
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
  margin: 5px;
  width: 280px;
  cursor: pointer;
`;

const CustomSelect = styled.select`
  appearance: none;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.light};
  font-size: 0.8em;
  text-transform: uppercase;
  align: left;
  font-weight: bold;
  margin: 5px;
  outline: none;
`;

const SelectSize = styled(CustomSelect)`
  width: 150px;
`;

const SelectQuantity = styled(CustomSelect)`
  width: 120px;
`;

AddToCart.propTypes = {
  skus: PropTypes.shape(),
};

AddToCart.defaultProps = {
  skus: {},
};

export default AddToCart;
