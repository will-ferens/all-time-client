import React from "react";
import styled from "styled-components";

const RangeFilterContainer = styled.div`
  margin: 12px 0;
`;
const RangeFilterButton = styled.button`
  padding: 8px 12px;
  margin: 0 8px 0 0;
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

const RangeFilter = () => {
  return (
    <RangeFilterContainer>
      {ranges.map((range) => (
        <RangeFilterButton key={range.id}>{range.name}</RangeFilterButton>
      ))}
    </RangeFilterContainer>
  );
};

export default RangeFilter;
