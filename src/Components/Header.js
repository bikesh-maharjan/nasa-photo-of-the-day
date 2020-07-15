import React from "react";

export default function Header(props) {
  const data = props;
  //   let data1 = data.data
  //  console.log(data)

  return (
    <div className="container">
      <h1>Nasa Photo of the Day</h1>
      <img src={data.data.url} alt={data.data.title} />
    </div>
  );
}
