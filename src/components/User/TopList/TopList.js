import React from "react";
import styled from "styled-components";
import Favorite from "./Favorite";
import ListItem from "./ListItem";
import RangeFilter from "./RangeFilter";
import {
  highlightedBorder,
  highlightedBackgroundColor,
  highlightedFontColor,
} from "../../../themes/themes";

import {
  mediaQueries,
  border,
  boxPaddingWide,
} from "../../../constants/styles";

export const TopListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TopListHeader = styled.h2`
  padding: 23px 12px 23px 12px;
  background: ${highlightedBackgroundColor};
  color: ${highlightedFontColor};
  border-bottom: ${border}${highlightedBorder};
  border-top: ${border}${highlightedBorder};
  &:last-child {
  }
  @media ${mediaQueries.laptop} {
    text-align: center;
  }
`;
export const FavoritesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media ${mediaQueries.laptop} {
    margin: 24px 0;
  }
`;

export const ListWrapper = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  border-collapse: collapse;
  align-self: center;
  width: 100%;
  border: ${border}${highlightedBorder};
  margin-bottom: 42px;
  thead {
    tr {
      th {
        padding: ${boxPaddingWide};
        background: ${highlightedBackgroundColor};
        color: ${highlightedFontColor};
      }
    }
  }
  @media ${mediaQueries.mobile} {
    width: auto;
  }
`;

const TopList = ({ list, listInfo, theme }) => {
  const topThree = list.slice(0, 3);
  return (
    <TopListContainer>
      <TopListHeader>Your Top {listInfo.name}</TopListHeader>
      {topThree ? (
        <FavoritesWrapper>
          {topThree.map((item, index) => {
            let images = item.album ? item.album.images : item.images;
            return (
              <Favorite
                key={`fav-${item.id}`}
                item={item}
                images={images}
                i={index}
              />
            );
          })}
        </FavoritesWrapper>
      ) : null}
      <ListWrapper>
        <RangeFilter />
        <Table>
          <thead>
            <tr>
              <th>Position</th>
              <th>{listInfo.name}</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              let album = item.album ? item.album : false;
              let artists = item.artists ? item.artists : false;
              return (
                <ListItem
                  i={index}
                  key={item.id}
                  item={item}
                  album={album}
                  artists={artists}
                  theme={theme}
                />
              );
            })}
          </tbody>
        </Table>
      </ListWrapper>
    </TopListContainer>
  );
};

export default TopList;
