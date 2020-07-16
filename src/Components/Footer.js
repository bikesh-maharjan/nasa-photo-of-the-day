import React from "react";

import styled from "styled-components";

const StyledF = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: grey;
  

  h2 {
    font-size: 1.9rem;
    font-style: helvetica;
    padding: 1%;
    text-decoration: none;
  }
  p {
    font-size: 1rem;
    font-style: Helvetica;
    padding: 1% 1%;
    color: lightblue;
  }
  a {
    font-size: 1rem;
    padding:  1%;
    text-decoration: none;
    color: black;

  }
`;

const Footer = (props) => {
  return (
    <StyledF className="footer">
      <h2>Contact</h2>
      <p> Bikesh Maharjan</p>
      <p> Full Stack Web Developer</p>
      <a href="https://github.com/bikesh-maharjan"> Github</a>
    </StyledF>
  );
};

export default Footer;
