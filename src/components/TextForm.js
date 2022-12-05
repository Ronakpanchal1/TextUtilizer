import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase","success")
  };

  const copyOnClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert(" Text has been Copied","success")
  };

  const clearOnClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert(" Text Cleared","success")
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase","success")
  };



  return (
    <>
      <div className="mb-3 container">
        <h1 style={{color: props.mode==='dark'?'#b1b1b1':'black'}}>{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text here"
          style={{backgroundColor: props.mode==='dark'?'#000':'white',color: props.mode==='dark'?'#b1b1b1':'black'}}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleUpClick} style={ {opacity:props.mode==='dark'?'0.75':'1'}}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick} style={ {opacity:props.mode==='dark'?'0.75':'1'}}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={clearOnClick} style={ {opacity:props.mode==='dark'?'0.75':'1'}}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={copyOnClick} style={ {opacity:props.mode==='dark'?'0.75':'1'}}>
          Copy Text
        </button>
      </div>
      <div className="my-3 container" style={{color: props.mode==='dark'?'#b1b1b1':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters
        </p>
        <p>Reading Time {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview Text</h2>
        <p>{text.length > 0 ?text:'No Text To Preview !'}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter The Text to Analyze",
};