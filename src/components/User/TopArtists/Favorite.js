import React from "react";
import styled from "styled-components";

export const FavoriteWrapper = styled.article``;
export const ArtistFigure = styled.figure``;
export const HoverTitleWrapper = styled.div``;

const Favorite = ({ artist }) => {
  return (
    <FavoriteWrapper>
      <ArtistFigure>
        <img src={artist.images[0].url} alt={artist.name} />
      </ArtistFigure>
      <HoverTitleWrapper>
        <h4>{artist.name}</h4>
      </HoverTitleWrapper>
    </FavoriteWrapper>
  );
};

export default Favorite;
