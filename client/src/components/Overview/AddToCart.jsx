import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  useEffect(() => {
    setQuantity(0);
    setError(false);
  }, [selectedSku]);

  const handleChange = (e) => {
    if (skus[e.target.value]) {
      setSelectedSku(e.target.value);
    } else {
      setSelectedSku(null);
    }
  };

  const handleQuantity = (e) => setQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSku) {
      setError(!error);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Size: ${skus[selectedSku].size} - Quantity: ${quantity}`);
    }
  };

  const anySkus = inStockSkus.length > 0;

  return (
    <>
      <SelectionError>{error ? 'Please select a size!' : null}</SelectionError>

      <SelectSize defaultValue="selectsize" onChange={handleChange}>
        {anySkus
          ? (
            <>
              <option value="selectsize">SELECT SIZE</option>
              {(inStockSkus.map((sku) => (
                <option value={sku.sku} key={sku.sku}>{sku.size}</option>)))}
            </>
          )
          : <option value="selectsize">NO STOCK</option>}
      </SelectSize>

      {anySkus
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

const SelectionError = styled.div`
  height: 40px;
  color: red;
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
