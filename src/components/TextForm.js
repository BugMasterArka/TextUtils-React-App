import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    const handleCopy = ()=> {
        let myText = text;
        navigator.clipboard.writeText(myText);
        props.showAlert("Text Copied!","success");
    }

    const handleExtraSpaces = ()=> {
        let myText = text.split(/[ ]+/);
        setText(myText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }

    const [text, setText] = useState(''); //this creates a state variable
    // text = "jsfvlfv"; //wrong way to change the state
    // setText("fvbvkejbvev"); //correct way to change the state variable value
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.length!==0?text.split(" ").length:0} words, {text.length} characters</p>
                <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}