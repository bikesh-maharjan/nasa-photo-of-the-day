import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Components/constant";
import Header from "./Components/Header";
import Info from "./Components/Info";
import styled from "styled-components";
import Footer from "./Components/Footer";

const AppStyles = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AppStyles className="App">
      <Header data={data} />
      <Info dateInfo={data.date} text={data.explanation} />
      <Footer />
    </AppStyles>
  );
}

export default App;
