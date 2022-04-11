import React from 'react';
import PropTypes from 'prop-types';

export default function HighlightText({ text, highlight }) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => (regex.test(part) ? (
        <mark key={part.concat(i)}>{part}</mark>
      ) : (
        <span key={part.concat(i)}>{part}</span>
      )))}
    </span>
  );
}

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};
