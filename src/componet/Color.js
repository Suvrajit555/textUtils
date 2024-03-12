import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Color() {
    const [color, setcolor] = useState('')
    const [style, setmyStyle] = useState('')
    const colorchange = (event) => {
        setcolor(event.target.value,)
    }
    return (
        <>
            <body style={{ backgroundColor: color, height: "105vh" }}>
                <div id='opt'>
                    <select value={color} onChange={colorchange}>
                        <option value="">select</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                    </select>
                </div>
            </body>
        </>
    )
}
