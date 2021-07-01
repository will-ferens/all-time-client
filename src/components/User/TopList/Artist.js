import React from "react";
import styled from "styled-components";
import { highlightedBorder } from "../../../themes/themes";

export const TableRow = styled.tr`
  box-sizing: border-box;
  border: 1px solid ${highlightedBorder};
  border-radius: 4px;
  td {
    padding: 12px 24px;
  }
`;
export const ArtistWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 64px;
    border-radius: 4px;
    margin-right: 16px;
  }
`;
export const PositionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Artist = ({ artist, i }) => {
  return (
    <TableRow>
      <td>
        <PositionWrapper>{i + 1}</PositionWrapper>
      </td>
      <td>
        <ArtistWrapper>
          <img src={artist.images[2].url} alt={artist.name} />
          <p>{artist.name}</p>
        </ArtistWrapper>
      </td>
    </TableRow>
  );
};

export default Artist;
