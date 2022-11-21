import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const IndividualItem = ({ mainColor, name,backgroundColor,addOption,id }) => {
    const [mouseEnter, setMouseEnter] = useState(false)
    return (
        <li
            style={{
                color: mainColor,
                backgroundColor:mouseEnter?backgroundColor:''
            }}
            onMouseEnter={() => {
                setMouseEnter(true)
            }} 
            onMouseLeave={()=>{
                setMouseEnter(false)
            }}
            onClick={() => addOption({mainColor,name,backgroundColor,id:uuidv4()})}
        >
            {name}
        </li>
    )
}

export default IndividualItem