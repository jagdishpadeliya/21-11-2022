import React from 'react'
import { AiFillCloseCircle} from "react-icons/ai";
const SelectedItem = ({backgroundColor,id,color,name,removeOption}) => {
  return (
    <span style={{
        color:color,
        backgroundColor:backgroundColor,
        padding:'0.8rem',
        borderRadius:5,
        marginRight:'0.5rem',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
      >
        {name}
        <AiFillCloseCircle
          style={{marginLeft:10}}
          onClick={()=>removeOption(id)}  
        />
      </span>
  )
}

export default SelectedItem