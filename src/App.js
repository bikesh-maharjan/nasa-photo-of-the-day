import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Components/constant";
import Header from "./Components/Header";
import Info from "./Components/Info";
import styled from "styled-components";
import Footer from "./Components/Footer";
import MainPhoto from "./Components/MainPhoto";

const AppStyles = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  const [data, setData] = useState([]);
  // const [nextPage, setNextPage] = useState(0);
  const [date, setDate] = useState("2020-07-16");
  const [hello, setHello] = useState("my name is");
  useEffect(() => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}&date=${date}`)

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);
  // const { explanation} = data; // state vayo
  return (
    <AppStyles className="App">
      <Header />
      <MainPhoto photo={data} />
      <Info
        dateInfo={data.date} /// whatever you are calling here goes in the  info as a props
        text={data.explanation}
        setDate={setDate}
        date={date}
        bikesh={hello}
      />
      <Footer setHello={setHello} hello={hello} />
    </AppStyles>
  );
}

export default App;
