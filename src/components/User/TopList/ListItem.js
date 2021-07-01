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
export const InfoCellWrapper = styled.div`
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

const ListItem = ({ item, album, artists, i }) => {
  let artistImage = false;
  let albumImage = false;
  if (item.images) {
    artistImage = item.images[2].url;
  }
  if (album) {
    albumImage = album.images[2].url;
  }
  return (
    <TableRow>
      <td>
        <PositionWrapper>{i + 1}</PositionWrapper>
      </td>
      <td>
        <InfoCellWrapper>
          {artistImage ? <img src={artistImage} alt={item.name} /> : null}
          {albumImage ? <img src={albumImage} alt={album.name} /> : null}
          <p>{item.name}</p>
          {artists
            ? artists.map((artist, i) => {
                return <span>{artist.name}</span>;
              })
            : null}
        </InfoCellWrapper>
      </td>
    </TableRow>
  );
};

export default ListItem;
