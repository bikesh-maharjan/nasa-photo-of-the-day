import React from "react";
import styled from "styled-components";

export default function Info(props) {
  const { dateInfo } = props;
  const { text } = props;

  const InfoD = styled.div`
    
    

    p {
      line-height: 1.8rem;
      color: black;
      padding: 1%;
    }
    button {
    }
  `;

  return (
    <InfoD className="infoDiv">
      <button> Previous</button>
      <button>Click Here More Information</button>
      <button> Next</button>

      <p> Today's Date: {dateInfo}</p>
      <p> {text}</p>
    </InfoD>
  );
}
