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
      padding: 30px;
      background-color: black;
    }
    a {
      color: lightblue;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: bold;
    }
    h1 {
      padding: 3%;
      font-size: 3rem;
    }
    img{
        height: 95vh;
        width: auto;
    }
  `;
  return (
    <HeaderDetails className="container">
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Explore</a>
      </nav>
      <h1>Astronomy Picture of the Day</h1>
      <img src={data.data.url} alt="Nasa of the day" />
    </HeaderDetails>
  );
}
