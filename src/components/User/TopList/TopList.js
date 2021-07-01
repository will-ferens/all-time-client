import React from "react";
import styled from "styled-components";
import Favorite from "./Favorite";
import ListItem from "./ListItem";
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
  padding: 24px 12px 23px 12px;
  background: ${highlightedBackgroundColor};
  color: ${highlightedFontColor};
  border-bottom: ${border}${highlightedBorder};
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

export const Table = styled.table`
  border-collapse: collapse;
  align-self: center;
  width: 80%;
  border: ${border}${highlightedBorder};
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
      <Table>
        <thead>
          <tr>
            <th>Position</th>
            <th>{listInfo.name}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <ListItem
                i={index}
                key={item.id}
                item={item}
                album={item.album ? item.album : false}
                artists={item.artists ? item.artists : false}
                theme={theme}
              />
            );
          })}
        </tbody>
      </Table>
    </TopListContainer>
  );
};

export default TopList;
