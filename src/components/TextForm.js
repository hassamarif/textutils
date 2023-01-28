import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onChangeHandle = () => {
    // search text
  };

  const handleSearchClick = () => {
    // search button
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
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
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to UperCase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <input
          className="form-control m-2 w-25"
          type="search"
          placeholder="Search word"
          aria-label="Search"
          onChange={onChangeHandle}
        />

        <button className="btn btn-primary mx-2 " onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summry</h2>
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
