import React , {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text );//
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
       // console.log("Uppercase was clicked" + text );//
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!" , "success");
    }
    const handleonChange=(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed!","success");
        }
    const handleCopy = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text has been copied!", "success");
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Text has been deleted!", "success");
    }    
    const[text, setText] = useState('');
    return (
    <>
    <div className ="container" style ={{color: props.mode=== 'dark'? 'white':'#13062d'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleonChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white' , color: props.mode=== 'dark'? 'white':'#13062d'}} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className = "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className = "btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>



    </div>
    <div className = "container my-3" style={{color: props.mode=== 'dark'?'white':'#13062d'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
    )
}
