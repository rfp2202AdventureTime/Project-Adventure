import { css } from 'styled-components';

const VisibleInExpanded = css`
  visibility: hidden;
  opacity: 0;
  &.expanded, &.zoom {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  &.default {
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s 0.3s, opacity 0.3s linear;
  }
`;

const VisibleInDefault = css`
  &.expanded, &.zoom {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }
  &.default {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s linear;
  }
`;

const Clickable = css`
  & > *:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
  & > *:active {
    transform: scale(0.95);
    transition: transform 0.06s ease-in-out;
  }
  & > * { transition: transform 0.1s ease-in-out; }
`;

export { Clickable, VisibleInDefault, VisibleInExpanded };
