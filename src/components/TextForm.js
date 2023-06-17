import React, {useState} from 'react'

export default function TextForm(props) {
  const changeupcase = () => {
    let newText = text.toUpperCase()
    settext(newText)
    props.showalert("Converted to uppercase", "success")
  }

  const handleonchange = (event) => {
    settext(event.target.value)
  }

  const changelocase = () => {
    let newtext = text.toLowerCase()
    settext(newtext)
    props.showalert("Converted to lowercase", "success")
  }

  const cleartext = () => {
    let newtext = ''
    settext(newtext)
    props.showalert("Clear the text", "success")
  }

  const reversetext = () => {
    let newtext = text.split(' ').reverse().join(' ')
    settext(newtext)
    props.showalert("Reverse the text", "success")
  }

  const handlecopy = () => {
    let text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy to Clipboard", "success")
  }

  const handlespaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "))
    props.showalert("Remove the extra spaces", "success")
  }


  const [text, settext] = useState("")
  return (
    <>
    <div className='container mt-4' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <div className="mb-3">
      <h2>{props.heading}</h2>
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="8" style={{backgroundColor : props.mode === 'dark' ? '#171749' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}></textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={changeupcase}>ConvertUPCase</button>
        <button className="btn btn-success mx-1" onClick={changelocase}>ConvertLOCase</button>
        <button className="btn btn-secondary mx-1" onClick={cleartext}>Clear Text</button>
        <button className="btn btn-danger mx-1" onClick={reversetext}>Reverse Text</button>
        <button className="btn btn-warning mx-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-dark mx-1" onClick={handlespaces}>Remove Extra Space</button>
    </div>

    <div className="container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text : "Enter something to textbox to preview it Here"}</p>
    </div>
    </>
  )
}

