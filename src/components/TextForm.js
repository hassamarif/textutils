import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
  };

  const handleOnChange = (event) => {
    console.log("Uppercase was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  //   if you want to change the text
  // setText("new Text");
  return (
    <div>
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        Convert to UperCase
      </button>
    </div>
  );
}
