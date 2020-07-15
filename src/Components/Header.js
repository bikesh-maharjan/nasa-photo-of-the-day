import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Header(props) {
  const data = props;
  //   let data1 = data.data
  //   console.log(data1)

  return (
    <div className="container">
      <h1>Nasa Photo of the Day</h1>
      <img src={data.url} alt={data.title} />
    </div>
  );
}
