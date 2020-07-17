import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const data = props;
  //   let data1 = data.data
  //  console.log(data)

  const HeaderDetails = styled.div`
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 40px;
      background-color: black;
    }
    a {
      color: lightblue;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: bold;
    }
  `;
  return (
    <HeaderDetails className="container">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Explore</a>
        <a href="#">Contact Us</a>
      </nav>
      <h1>Nasa Photo of the Day</h1>
     
    </HeaderDetails>
  );
}
