import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// This isn't fully done. Things left to do:
// - Disable the style selector when no items are in stock
// - Remove the Add to Cart and Quantity Selectors when out of stock
// - Default options for Size and Quantity selectors aren't correct.
// - Actually make the POST request when adding to cart instead of console logging.
// - Down arrow styling for the dropdowns.

function AddToCart({ skus }) {
  const [currentSku, setCurrentSku] = useState();
  const [quantity, setQuantity] = useState();
  const [stock, setStock] = useState();
  const [error, setError] = useState(false);
  const [validSkus, setValidSkus] = useState([]);

  useEffect(() => {
    const valid = Object.keys(skus)
      .filter((sku) => (skus[sku].quantity > 0))
      .map((sku) => ({ ...skus[sku], sku }));
    setValidSkus(valid);
  }, [skus]);

  useEffect(() => {
    setQuantity(0);
    setError(false);
    if (skus[currentSku]) {
      setStock(skus[currentSku].quantity > 15 ? 15 : skus[currentSku].quantity);
    }
  }, [currentSku]);

  const handleChange = (e) => {
    setCurrentSku(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentSku) {
      setError(!error);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Size: ${skus[currentSku].size} - Quantity: ${quantity}`);
    }
  };

  return (
    <>
      <SelectionError>{error ? 'Please select a size!' : null}</SelectionError>
      <SelectSize onChange={handleChange}>
        {validSkus.length > 0
          ? (validSkus.map((sku) => (
            <option
              value={sku.sku}
              key={sku.sku}
            >
              {sku.size}
            </option>
          )))
          : <option disabled>NO STOCK</option>}
      </SelectSize>

      <SelectQuantity onChange={handleQuantity}>
        {!stock
          ? <option>NO STOCK</option>
          : [...Array(stock).keys()].map((num) => (
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
