import React, { useState } from 'react'
import './styling/Textform.css'

// import PropTypes from 'prop-types'

export default function Textform(props) {

const [text, setText] = useState("")
const clearTextHandler = () =>{
    console.log("button clicked")
    setText("")
    props.showAlert("Text field emptied", "success")
}

const copyHandler = () =>{
    console.log("button clicked")
    var newText = document.getElementById("textArea")
    newText.select()
    navigator.clipboard.writeText(newText.value)
    document.getSelection().removeAllRanges(); // use to remove selection, made by select()
    // setText(newText)
    props.showAlert("Text Copied", "success")
}
const upperCaseHandler = () =>{
    console.log("button clicked")
    let newText = text[0].toUpperCase()+text.slice(1).toLowerCase()
    setText(newText)
    props.showAlert("Successfully converted to Uppercase", "success")
}
const lowerCaseHandler = () =>{
    console.log("button clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Successfully converted to Lowercase", "success")

}
const titleCaseHandler = () =>{
    console.log("button clicked")
    console.log(text)
    let newText = text.split(" ").map(text=>text[0].toUpperCase()+text.slice(1).toLowerCase()).join(' ');
    // console.log(newText)
    setText(newText)
    props.showAlert("Successfully converted to Titlecase", "success")

}
const sentenseCaseHandler = () =>{
    console.log("button clicked")
    let newText = text[0].toUpperCase( )+ text.slice(1);   
    // console.log(newText)
    setText(newText)
    props.showAlert("Successfully converted to Sentensecase", "success")

}


const onChangeHandler = (event) =>{
    console.log("output changed")
    setText(event.target.value)
}

// let lightMode = {
//     color: 'black',
//     backgroundColor:'white'
// }
// const [lightMode, setLightMode] = useState()
// const [btnText, setBtnText] = useState('Light Mode')

// const toggleMode = () =>{
//     if(lightMode==null){
//         setLightMode({
//             color: 'black',
//             backgroundColor:'white'
//         })
//         setBtnText('Dark Mode')
//     }
//     else{
//         setLightMode()
//         setBtnText('Light Mode')

//     }
// }

  return (
    <>
        <div className={`container container1 mt-5 bg-${props.navMode==='dark'?'dark':'danger'}`} style={{backgroundColor:props.navMode==='dark'?'grey':'dark'}}>
           <div>
                <h2 className={`text-${props.navMode==='dark'?'light':'light'}`}>Type Text</h2>
                <textarea className="form-control" onChange={onChangeHandler} value={text} id="textArea" rows="3"></textarea>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={clearTextHandler}>Clear</button>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={copyHandler}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={upperCaseHandler}>UpperCase</button>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={lowerCaseHandler}>LowerCase</button>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={titleCaseHandler}>TitleCase</button>
                <button disabled={text.length===0} className='btn btn-light mt-4 mx-2' onClick={sentenseCaseHandler}>SentenseCase</button>
           </div>
           {/* <div>
                <button mode='modeHanlder' onClick={toggleMode} className='btn btn-info mt-4 mx-2'>{btnText}</button>
           </div> */}
           <div className={`text-${props.navMode==='dark'?'light':'light'}`}>
                <h2 className='mt-3'>Text Summary</h2>
                <p>{text.split(/\s+/).filter(element=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter(element=>{return element.length!==0}).length} Minutes Read </p>
           </div>
           <div className={`text-${props.navMode==='dark'?'light':'light'}`}>
                <h2 className='mt-3'>Text Preview</h2>
                <p>{text.length?text:"Nothing to preview"}</p>
           </div>
        </div>
    </>
  )
}
  
