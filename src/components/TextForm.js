import React, { useState } from "react";
// import { TextToSpeechClient } from "@google-cloud/text-to-speech";

export default function TextForm(props) {
  //uper
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //lower
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //listen
  const handleListenClick = () => {};

  //clear
  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  // // for search
  // const onChangeHandle = (e) => {
  //   setsearch(e.target.value);
  // };

  // const handleSearch = (e) => {
  //   // search button
  //   let words = text.split(" ");
  //   let highlightedText = words.map((word) => {
  //     if (word === search) {
  //       return `<span style='background-color: yellow;'>${word}</span>`;
  //     }
  //     return word;
  //   });
  //   // setText(highlightedText.join(" "));
  //   // console.log(search);
  //   console.log(highlightedText.join(" "));
  // };
  // const [search, setsearch] = useState("");

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
        <button className="btn btn-primary m-1" onClick={handleListenClick}>
          🔊
        </button>

        {/* <input
          className="form-control m-2 w-25"
          type="search"
          placeholder="Search word"
          aria-label="Search"
          onClick={onChangeHandle}
        />

        <button className="btn btn-primary mx-2 " onClick={handleSearch}>
          Search
        </button> */}
      </div>
      <div className="container">
        <h2>Your Text Summry</h2>
        <p>
          Words {text.split(" ").length} and chracters {text.length}
        </p>
        <p>Minutes Read {0.008 * text.split(" ").length}</p>
        <h1>Preview</h1>
        <div className="m-3 border border-dark p-3 rounded-4">
          <h6>
            <p>{text}</p>
          </h6>
        </div>
      </div>
    </>
  );
}
