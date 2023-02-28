import React, { useState } from "react";

export default function TextForm(props) {
  //uper
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text has been convert to Upper case!", "success");
  };

  //lower
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Text has been convert to Lower case!", "success");
  };

  //clear
  const handleClearClick = () => {
    setText("");
    props.showAlert(" Text Cleared!", "success");
  };

  // copy
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard!", "success");
  };
  //capitalizing first alphabit of perview portion
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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
          style={{
            backgroundColor:
              props.mode === "light"
                ? "white"
                : props.mode === "dark"
                ? "#092b4f"
                : "light",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={handleOnChange}
          id="myBox"
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
        <button className="btn btn-primary m-1" onClick={handleCopyClick}>
          Copy
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summry</h2>
        <p>
          Words {text.split("").length} and chracters {text.length}
        </p>
        <p>
          Minutes Read {text.length > 0 ? 0.008 * text.split("").length : "..."}
        </p>
        <h1>Preview</h1>
        <div className="m-3">
          <h6>
            <p>
              {text.length > 0
                ? capitalize(text)
                : "Enter something to perview it here!"}
            </p>
          </h6>
        </div>
      </div>
    </>
  );
}
