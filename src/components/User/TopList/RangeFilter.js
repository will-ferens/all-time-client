import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  highlightedBorder,
  highlightedBackgroundColor,
  highlightedFontColor,
  accentFontColor,
} from "../../../themes/themes";

const RangeFilterContainer = styled.div`
  margin: 12px 0;
`;
const RangeFilterButton = styled.button`
  padding: 8px 12px;
  margin: 0 8px 0 0;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${highlightedBorder};
  background-color: ${accentFontColor};
  color: ${highlightedFontColor};
  &.active {
    background-color: ${highlightedBackgroundColor};
    &:hover {
      background-color: ${highlightedBackgroundColor};
      color: ${highlightedFontColor};
      font-weight: 500;
      cursor: default;
    }
  }
  &:before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  &:hover {
    background-color: ${highlightedFontColor};
    font-weight: 600;
    color: ${accentFontColor};
  }
`;

const ranges = [
  {
    id: "long_term",
    name: "All time",
  },
  {
    id: "medium_term",
    name: "Past 6 months",
  },
  {
    id: "short_term",
    name: "This month",
  },
];

const RangeFilter = ({ listInfo }) => {
  const dispatch = useDispatch();
  return (
    <RangeFilterContainer>
      {ranges.map((range) => (
        <RangeFilterButton
          onClick={() => dispatch(listInfo.fetchList(listInfo.token, range.id))}
          key={range.id}
          title={range.name}
          className={range.id === listInfo.range ? "active" : ""}
        >
          {range.name}
        </RangeFilterButton>
      ))}
    </RangeFilterContainer>
  );
};

export default RangeFilter;
