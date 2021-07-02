import React from "react";
import styled from "styled-components";
import { highlightedBorder } from "../../../themes/themes";

export const TableRow = styled.tr`
  box-sizing: border-box;
  border: 1px solid ${highlightedBorder};
  border-radius: 4px;
  td {
    padding: 12px 24px;
    &:first-child {
      width: 30%;
    }
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
  .item-info {
    align-self: center;
    p {
      font-weight: 700;
    }
    span {
      font-weight: 500;
      color: #6b7280;
    }
  }
`;
export const PositionWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #6b7280;
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
          {artistImage ? (
            <img src={artistImage} alt={item.name} />
          ) : (
            <img src={albumImage} alt={album.name} />
          )}
          <div className="item-info">
            <p>{item.name}</p>
            {artists
              ? artists.map((artist) => {
                  return (
                    <span key={`artists${item.id}${artist.name}`}>
                      {artist.name}&nbsp;
                    </span>
                  );
                })
              : null}
          </div>
        </InfoCellWrapper>
      </td>
    </TableRow>
  );
};

export default ListItem;
