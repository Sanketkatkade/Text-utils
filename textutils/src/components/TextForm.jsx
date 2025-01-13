import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!","success");
  };

  const handleLcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!","success");
  };

  const ClearAll = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear all!","success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to the clipboard!","success");
  };

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value); // Update the state with the current value of the textarea
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-3" onClick={handleLcClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-3" onClick={ClearAll}>
          Clear All
        </button>
        <button className="btn btn-primary m-3" onClick={handleCopy}>
          Copy All
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} min to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </div>
  );
}
