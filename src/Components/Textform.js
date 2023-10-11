import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpclick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoclick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handlecleartext = () =>{
        let newtext = ('');
        setText(newtext)
        props.showAlert("Text Cleared", "success")
    }

    const handleonchange = (event) =>{
        setText(event.target.value)

    }

    const handlecopy = () =>{
        let text = document.getElementById('mybox')
           text.select();
           navigator.clipboard.writeText(text.value);
           document.getSelection().removeAllRanges()
           props.showAlert("copied to clipboard", "succcess")
    }
   
    const handleExtraspaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed!", "success")
    }




    const [text, setText] = useState('');


  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white': '#042743'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark'?'#13466e': 'light', color: props.mode === 'dark'?'white': 'light'}} id="mybox" rows="8"></textarea>
</div>
<button disabled = {text.length ===0} className="btn btn-primary my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button disabled = {text.length ===0} className="btn btn-primary my-1" onClick={handlecleartext}>Clear Text</button>
<button disabled = {text.length ===0} className="btn btn-primary my-1 mx-2" onClick={handlecopy}>Copy text</button>
<button disabled = {text.length ===0} className="btn btn-primary my-1" onClick={handleExtraspaces}> Remove Extra Space </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white': '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Reads</p>
        <h2>Text Preview</h2>
       <p>{text.length>0?text:"Nothing to peview!"}</p>

    </div>
    </>
  )
}
