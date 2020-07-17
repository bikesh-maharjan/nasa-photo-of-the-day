import React from "react";

import styled from "styled-components";

const StyledF = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: grey;

  h2 {
    font-size: 1.5rem;
    font-style: helvetica;
    padding: 1%;
    text-decoration: none;
  }
  p {
    font-size: 1rem;
    font-style: Helvetica;
  }
  a {
    font-size: 1rem;
    padding: 2%;
    text-decoration: none;
    color: lightblue;
  }
`;

const Footer = (props) => {
  const { setHello, hello } = props;
  return (
    <StyledF className="footer">
      <h2>Contact</h2>
      <p> Bikesh Maharjan</p>
      <p> Full Stack Web Developer</p>
      <a href="https://github.com/bikesh-maharjan" target="_blank">
        Github
      </a>
      <button onClick={() => setHello("I am bikesh")}> {hello}</button>
    </StyledF>
  );
};

export default Footer;
