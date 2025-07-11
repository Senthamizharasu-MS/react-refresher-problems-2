import React, { useState } from 'react'

const TextInputMirror = () => {
    const[text,setText] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>(setText(e.target.value))} />
        <p>{text}</p>
    </div>
  )
}

export default TextInputMirror