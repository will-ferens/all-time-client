import React from "react";
import styled from "styled-components";

export const ArtistFigure = styled.figure`
  margin: 12px;
  img {
    border-radius: 4px;
    transition: all 0.3s;
  }
`;
export const HoverTitleWrapper = styled.div`
  position: absolute;
  transition: all 0.3s;
  opacity: 0;
  bottom: 24px;
  text-align: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  h4 {
    margin: 0 24px;
    padding: 8px 12px;
    border: 1px solid #f0005b;
    background-color: #260922;
    color: #d63aa7;
  }
  span {
    padding-right: 4px;
  }
`;
export const FavoriteWrapper = styled.article`
  position: relative;
  width: 33%;

  &:hover {
    div${HoverTitleWrapper} {
      bottom: 50px;
      opacity: 1;
    }
    img {
      opacity: 0.7;
    }
  }
`;

const Favorite = ({ artist, i }) => {
  return (
    <FavoriteWrapper>
      <ArtistFigure>
        <img src={artist.images[1].url} alt={artist.name} />
      </ArtistFigure>
      <HoverTitleWrapper>
        <h4>
          <span>{i + 1}.</span>
          {artist.name}
        </h4>
      </HoverTitleWrapper>
    </FavoriteWrapper>
  );
};

export default Favorite;
