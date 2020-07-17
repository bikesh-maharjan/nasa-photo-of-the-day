import React from "react";
import styled from "styled-components";

const InfoD = styled.div`
  margin-top: 20px;
  //child
  p {
    line-height: 1.8rem;
    color: black;
    padding: 1%;
  }

  button {
    background-color: black;
    color: lightblue;
    border-radius: 30px;
    border: none;
    padding: 1%;
  }
  button:not(:last-child) {
    margin-right: 10px;
  }
`;

export default function Info(props) {
  const { dateInfo, text, setDate, date, bikesh } = props;
  //   console.log(date);

  console.log(bikesh)

  //"2020-07-16"

  const splitDate = date.split("-"); // ["2020","07","16"]
  //   console.log(splitDate);
  const prev = parseInt(splitDate.pop()) - 1;// parseInt("16")  -1 = 15
  const newDate = `${splitDate[0]}-${splitDate[1]}-${prev}`;
  // 2020-07-11

  return (
    <InfoD className="infoDiv">
      <button onClick={() => setDate(newDate)}> Previous</button>
      <button>Click Here More Information</button>
      <button> Next</button>
      <p> Today's Date: {dateInfo} </p>
      <p> {text}</p>
    </InfoD>
  );
}
