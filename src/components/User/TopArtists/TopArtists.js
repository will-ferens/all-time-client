import React from "react";
import styled from "styled-components";
import Favorite from "./Favorite";
import Artist from "./Artist";
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

export const TopArtistsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TopArtistsHeader = styled.h2`
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

const TopArtists = ({ artists, theme }) => {
  const topFive = artists.slice(0, 3);
  return (
    <TopArtistsContainer>
      <TopArtistsHeader>Your Top Artists</TopArtistsHeader>
      <FavoritesWrapper>
        {topFive.map((artist, index) => {
          return (
            <Favorite key={`fav-${artist.id}`} artist={artist} i={index} />
          );
        })}
      </FavoritesWrapper>
      <Table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, index) => {
            return (
              <Artist i={index} key={artist.id} artist={artist} theme={theme} />
            );
          })}
        </tbody>
      </Table>
    </TopArtistsContainer>
  );
};

export default TopArtists;
