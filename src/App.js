import React, { useState } from 'react'
import items from './utils/ItemsData'
import './App.css'
import IndividualItem from './component/IndividualItem/IndividualItem'
import { AiFillCloseCircle, AiOutlineCaretDown } from "react-icons/ai";
const App = () => {
  const[selectedOptions, setSelectedOptions] = useState([])
  const [showOptions, setShowOptions] = useState(true)
  const addOption = ({name,mainColor,backgroundColor,id})=>{
    console.log("called for adding"+id);
    setSelectedOptions((selectedOptions)=>[...selectedOptions,{name,mainColor,backgroundColor,id}])
  }
  const removeOption =(id)=>{
    console.log("called for removing"+id);
    setSelectedOptions((selectedOptions)=>selectedOptions.filter((selectedOption)=>selectedOption.id!==id))
  }
  return (
    <div className="container">
      <div className="selected-option">
      {
        selectedOptions.map((selectedOption,index)=>(
          <span style={{
            color:selectedOption.color,
            backgroundColor:selectedOption.backgroundColor,
            padding:'0.8rem',
            borderRadius:5,
            marginRight:'0.5rem',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
          key={index}
          >
            {selectedOption.name}
            <AiFillCloseCircle
              style={{marginLeft:10}}
              onClick={()=>removeOption(selectedOption.id)}  
            />
          </span>
        ))
      }
      <div className="menu" style={{marginLeft:'auto',display:'flex',alignItems:"center"}}>
        <AiFillCloseCircle style={{fontSize:'1.3rem'}} onClick={()=>setSelectedOptions([])}/>
        <span style={{fontSize:'1.8rem',margin:'0rem 0.5rem'}}>|</span>
        <AiOutlineCaretDown  style={{fontSize:'1.6rem'}} onClick={()=>setShowOptions(!showOptions)}/>
      </div>
      </div>
      <div 
        className="options"
        style={{
          display:showOptions?'block':'none'
        }}
      >
        <ul>
          {
            items.map((item,index)=>(
              <IndividualItem {...item} key={index} addOption={addOption}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App