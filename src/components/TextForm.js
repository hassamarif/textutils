import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
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
      <div className="container">
        <h1>Your Text Summry</h1>
        <p>
          Words {text.split(" ").length} and chracters {text.length}
        </p>
        <p>Minutes Read {0.008 * text.split(" ").length}</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
