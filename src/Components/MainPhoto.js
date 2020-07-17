import React from "react";
import styled from "styled-components";

const PhotoOfTheDay = styled.div`
  height: 90vh;
  width: auto;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export default function MainPhoto(props) {
  const { photo } = props;

  return (
    <PhotoOfTheDay>
      <img src={`${photo.url}`} alt="Nasa of the day" />
    </PhotoOfTheDay>
  );
}
