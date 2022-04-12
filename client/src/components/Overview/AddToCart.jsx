import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import { FiAlertTriangle } from 'react-icons/fi';

import Console from '../../Console';

// - Actually make the POST request when adding to cart instead of console logging.
// - Down arrow styling for the dropdowns.

function AddToCart({ skus }) {
  const [selectedSku, setSelectedSku] = useState();
  const [quantity, setQuantity] = useState();
  const [error, setError] = useState(false);

  const inStockSkus = Object.keys(skus)
    .filter((sku) => (skus[sku].quantity > 0))
    .map((sku) => ({ ...skus[sku], sku }));

  // Assume nothing is in stock. If it is, return that or 15, whichever is lower.
  let currentStock = 0;
  if (skus[selectedSku]) {
    currentStock = (skus[selectedSku].quantity > 15)
      ? 15
      : skus[selectedSku].quantity;
  }

  useEffect(() => setSelectedSku(null), [skus]);
  useEffect(() => setQuantity(1), [selectedSku]);
  useEffect(() => setError(false), [selectedSku, skus]);

  // If selected sku isn't actually a sku (IE- the default option), don't actually set it.
  const handleChange = (e) => {
    const newSku = (skus[e.target.value]) ? e.target.value : null;
    setSelectedSku(newSku);
  };

  const addToCart = () => {
    axios({
      method: 'POST',
      url: '/cart',
      data: { sku_id: selectedSku },
    })
      .then(({ data }) => Console.log(`Added to cart! SKU: ${selectedSku}, COUNT: ${quantity}`, data))
      .catch((err) => Console.log(err));
  };

  const handleQuantity = (e) => setQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSku) {
      setError(true);
    } else {
      addToCart();
    }
  };

  const anyValidSkus = inStockSkus.length > 0;

  return (
    <>
      <SelectionError>
        {error ? (
          <Error>
            <AlertWrapper>
              <FiAlertTriangle />
            </AlertWrapper>
            Please select a size!
          </Error>
        ) : null}
      </SelectionError>

      <SelectSize defaultValue="selectsize" onChange={handleChange}>
        {anyValidSkus
          ? (
            <>
              <option value="selectsize">SELECT SIZE</option>
              {(inStockSkus.map((sku) => (
                <option value={sku.sku} key={sku.sku}>{sku.size}</option>)))}
            </>
          )
          : <option value="selectsize">OUT OF STOCK</option>}
      </SelectSize>

      {anyValidSkus
        ? (
          <>
            <SelectQuantity defaultValue="selectQuantity" onChange={handleQuantity}>
              {!currentStock
                ? <option value="selectquantity">-</option>
                : [...Array(currentStock).keys()].map((num) => (
                  <option value={num + 1} key={num + 1}>{num + 1}</option>
                ))}
            </SelectQuantity>

            <AddToCartButton onClick={handleSubmit}>Add to Cart</AddToCartButton>
          </>
        )
        : null}
    </>
  );
}

const ErrorAnimation = keyframes`
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
`;

const SelectionError = styled.div`
  height: 40px;
  color: red;
  animation-name: ${ErrorAnimation};
  animation-duration: 0.5s;
  display: flex;
  align-content: flex-end;
`;

const Error = styled.span`
  animation-name: ${ErrorAnimation};
  animation-duration: 0.5s;
  line-height: 50px;
  font-size: 0.9em;
  margin-left: 5px;
`;

const AlertWrapper = styled.div`
  display: inline-block;
  padding-right: 4px;
`;

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
  & > svg { display: inline-block; }
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
