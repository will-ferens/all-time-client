import React from "react";
import styled from "styled-components";

export const ArtistWrapper = styled.article``;

const Artist = ({ artist }) => {
  return <ArtistWrapper>{artist.name}</ArtistWrapper>;
};

export default Artist;
