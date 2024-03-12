import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const handleonchange = (event) => {
        console.log("onchange");
        if (text.length >= 200) {
            console.log("on");
            // alert("Only 200 Character are allowed so plz clear and write another time")
            props.showalert("Only 200 Character Are Allowed", "danger")
            setText(event.target.value)
        }
        else {
            // const capitalword = event.target.value
            // setText(capitalword.toUpperCase());
            setText(event.target.value)
            const sword = text.split(' ')
            if (sword.includes("blue")) {
                alert('yes we find it')
                document.body.style.backgroundColor = "blue"
            }
            else {
                console.log("ok");
            }
        }
    }
    const handleupclick = () => {
        console.log("uppercase was clicked...");
        let newtext = text.toUpperCase();
        setText(newtext);
        // setUppercasebutton('')
        if (text.length == 0) {
            props.showalert("Please Enter Any Word To Enjoy This Service", "warning")
        }
        else {
            props.showalert("Converted To Uppercase", "success")
            setUpper('your uppercase Letter')
        }
    }
    const handlelowercase = () => {
        console.log("lowercase was clicked.");
        let lowertext = text.toLowerCase()
        setText(lowertext)
        if (text.length == 0) {
            props.showalert("Please Enter Any Word To Enjoy This Service", "warning")
        }
        else {

            setUpper('your lowercase Letter')
        }
        // setLowercasebutton('')
    }
    const empty = () => {
        console.log("empty");
        if (text.length > 0) {
            setText("")
            setPreview("")
            setUpper("")
        }
        else {
            props.showalert("Allreday There Are No Word", "warning")
        }
    }
    const Captilaized = () => {
        console.log("")
        const words = text.split(' ')
        const convertwords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        });
        setText(convertwords.join(' '))
    }
    const reverse = () => {
        // setText(text.split('').reverse().join(''))
        // if (text === "lipu") {
        //     console.log("ok");
        // }
        // else {
        //     console.log("not ok");
        // }s
        setText(text.split('').reverse().join(''))
    }
    const replace = () => {
        // const replace1 = document.getElementById('replace1')
        // const replace2 = document.getElementById('replace2')
        // setText(text.replace(replace1.value, replace2.value))
        setText(text.replace(prompt("Which One  Word You Want To Replace"), prompt("With Whom")))
    }
    const find = () => {
        const sword = text.split(' ')
        if (sword.includes(prompt("Enter the Word U want To Search"))) {
            alert('yes we find it')
        }
        else {
            alert("Sry We Do Not find It");
        }
    }



    const [text, setText] = useState('enter text here')
    const [upper, setUpper] = useState('')
    const [words, setWords] = useState('')
    const [darks, setDarks] = useState('Dark')
    const [preview, setPreview] = useState('')
    const [myStyle, setMystyle] = useState({
        backgroundColor: "white",
        color: "black"
    })
    // const colorchange = () => {
    //     setMystyle({
    //         backgroundColor: "red",
    //         color: "black"
    //     })
    // }
    // const [backgroundColor, setBackgroundColor] = useState('');
    const dark = () => {
        if (myStyle.color === "white") {
            setMystyle({
                backgroundColor: "white",
                color: "black"
            })
            setDarks("Dark On")
            document.title = "TextUtils-Light For TextForm"
        }
        else {
            setMystyle({
                backgroundColor: "black",
                color: "white"
            })
            setDarks("Dark Off")
            document.title = "TextUtils-Dark For TextForm"
        }
    }
    const [uppercasebutton, setUppercasebutton] = useState('convert to Uppercase')
    const [lowercasebutton, setLowercasebutton] = useState('convert to Lowercase')
    const [color, setcolor] = useState('')

    // text="lipu"  ->its wrong method to change a text
    // setText="lipu"-> its the right way to change a text
    // setText("Tell Me About Yourself");
    return (
        <>
            <body style={myStyle}>
                <div className="box">
                    <h2>{props.heading}</h2>
                    <div style={{ height: "23px", margin: "8px auto", fontSize: "20px" }}>{upper}</div>
                    <textarea name="box" id="mybox" style={myStyle} onChange={handleonchange} value={text} cols="20" rows="5"></textarea>
                </div>
                <div className="botton1">
                    <div className="num">
                        {/* <button id=s'Convert' style={myStyle} onClick={colorchange}>Switch To Red</button> */}
                        <button id='btndesign' style={myStyle} onClick={handleupclick}>{uppercasebutton}</button>
                        <button id='btndesign' style={myStyle} onClick={handlelowercase}>{lowercasebutton}</button>
                        <button id='btndesign' style={myStyle} onClick={empty}>Clear</button>
                    </div>
                    <div className="num">
                        <button id='btndesign' style={myStyle} onClick={Captilaized}>Abc</button>
                        <button id='btndesign' style={myStyle} onClick={reverse}>Reverse</button>
                        <button id='btndesign' style={myStyle} onClick={replace}>Replace</button>
                    </div>
                    <div className="num">
                        <button id='btndesign' style={myStyle} onClick={props.speak}>Speak</button>
                        <button id='btndesign' style={myStyle} onClick={find}>Find</button>
                        <button id='btndesign' style={myStyle} onClick={dark}>{darks}</button>
                    </div>
                    {/* <input type="textstyle={myStyle}" id='replace1' placeholder='Which One  Word You Want To Replace' />
                    <input type="text" name="text" id="replace2" placeholder='With Whom' /> */}
                </div>
                <div style={{ textAlign: "center" }}>
                    <p id='text'>{text.split(" ").filter((element) => { return element.length !== 0 }).length}words and {text.length} character</p>;
                    <h3 >Preview</h3>
                    <p id='preview'>{text}</p>
                </div>
            </body >
        </>
    )
}