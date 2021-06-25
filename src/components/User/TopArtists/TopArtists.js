import React from "react";
import styled from "styled-components";
import Favorite from "./Favorite";
import Artist from "./Artist";

export const TopArtistsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TopArtistsHeader = styled.h2``;
export const FavoritesWrapper = styled.div`
  display: flex;
`;

const TopArtists = ({ artists }) => {
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
      {artists.map((artist) => {
        return <Artist key={artist.id} artist={artist} />;
      })}
    </TopArtistsContainer>
  );
};

export default TopArtists;
