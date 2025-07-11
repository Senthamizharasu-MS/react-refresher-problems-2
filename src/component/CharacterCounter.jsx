import React, { useState } from 'react'

const CharacterCounter = () => {
    const [text,setText] = useState("");
  return (
    <div>
        <textarea  disabled={text.length>=10?true:false} name="" id="" onChange={(e)=>(setText(e.target.value))}></textarea>
        {text.length>=10?<p>Character Exceed</p>:<p>Character count: {text.length}</p>}
    </div>
  )
}

export default CharacterCounter