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

const TopArtists = ({ artists }) => {
  const topFive = artists.slice(0, 5);
  return (
    <TopArtistsContainer>
      <TopArtistsHeader>Your Top Artists</TopArtistsHeader>
      {topFive.map((artist) => {
        return <Favorite artist={artist} />;
      })}
      {artists.map((artist) => {
        return <Artist artist={artist} />;
      })}
    </TopArtistsContainer>
  );
};

export default TopArtists;
