import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  highlightedBorder,
  highlightedBackgroundColor,
  highlightedFontColor,
} from "../../../themes/themes";

import { border } from "../../../constants/styles";

const RangeFilterContainer = styled.div`
  margin: 12px 0;
`;
const RangeFilterButton = styled.button`
  padding: 8px 12px;
  margin: 0 8px 0 0;
  background: ${highlightedBackgroundColor};
  border: ${border}${highlightedBorder};
  color: ${highlightedFontColor};
`;

const ranges = [
  {
    id: "long_term",
    name: "All time",
    active: false,
  },
  {
    id: "medium_term",
    name: "Past 6 months",
    active: false,
  },
  {
    id: "short_term",
    name: "This month",
    active: false,
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
        >
          {range.name}
        </RangeFilterButton>
      ))}
    </RangeFilterContainer>
  );
};

export default RangeFilter;
