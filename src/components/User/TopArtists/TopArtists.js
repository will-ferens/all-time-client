import React from "react";
import styled from "styled-components";
import Artist from "./Artist";

export const TopArtistsContainer = styled.section``;
export const TopArtistsHeader = styled.h2``;

const TopArtists = ({ artists }) => {
  return (
    <TopArtistsContainer>
      <TopArtistsHeader>Your Top Artists</TopArtistsHeader>
      {artists
        ? artists.map((artist) => {
            return <Artist artist={artist} />;
          })
        : null}
    </TopArtistsContainer>
  );
};

export default TopArtists;
