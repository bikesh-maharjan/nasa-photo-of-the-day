import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Components/constant";
import Header from "./Components/Header";

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
  },[]);

  return (
    <div className="App">
      <Header data={data}/>

      <p>
      </p>
    </div>
  );
}

export default App;
