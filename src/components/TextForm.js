import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was called");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLowClick = () => {
    // console.log("Uppercase was called");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("On change was called");
  }

  const clearText = () => {
    setText('')
    props.showAlert("Text has been cleared", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "success");
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#b15757' : 'white'}} id="myBox" rows="5"></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleLowClick}>Convert to lower case</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  )
}
