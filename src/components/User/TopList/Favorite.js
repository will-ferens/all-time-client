import React from "react";
import styled from "styled-components";
import {
  highlightedBorder,
  highlightedBackgroundColor,
  highlightedFontColor,
} from "../../../themes/themes";
import { mediaQueries } from "../../../constants/styles";

export const ItemFigure = styled.figure`
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
    border: 1px solid ${highlightedBorder};
    background-color: ${highlightedBackgroundColor};
    color: ${highlightedFontColor};
  }
  span {
    padding-right: 4px;
  }
`;
export const FavoriteWrapper = styled.article`
  position: relative;
  width: 33%;
  margin: 12px;
  text-align: center;
  &:hover {
    div${HoverTitleWrapper} {
      bottom: 50px;
      opacity: 1;
    }
    img {
      opacity: 1.7;
    }
  }
  @media ${mediaQueries.tablet} {
    width: 28%;
    margin: 0;
  }
`;

const Favorite = ({ item, images, i }) => {
  let srcSet = "";
  for (let i = 0; i < images.length; i++) {
    srcSet = srcSet.concat(`${images[i].url} ${images[i].width}w,`);
  }
  return (
    <FavoriteWrapper>
      <ItemFigure>
        <img
          alt={item.name}
          srcSet={srcSet}
          sizes="(max-width: 540px) 90px, (max-width: 768px) 150px, (max-width: 991px) 220px, 320px"
        />
      </ItemFigure>
      <HoverTitleWrapper>
        <h4>
          <span>{i + 1}.</span>
          {item.name}
        </h4>
      </HoverTitleWrapper>
    </FavoriteWrapper>
  );
};

export default Favorite;
