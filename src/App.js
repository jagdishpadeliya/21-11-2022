import React, { useState } from 'react'
import items from './utils/ItemsData'
import './App.css'
import IndividualItem from './component/IndividualItem/IndividualItem'
import { AiFillCloseCircle, AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import SelectedItem from './component/SelectedItem/SelectedItem';
const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [showOptions, setShowOptions] = useState(true)

  const addOption = ({ name, mainColor, backgroundColor, id }) => {
    setSelectedOptions((selectedOptions) => [...selectedOptions, { name, mainColor, backgroundColor, id }])
  }

  const removeOption = (id) => {
    setSelectedOptions((selectedOptions) => selectedOptions.filter((selectedOption) => selectedOption.id !== id))
  }

  return (
    <div className="container">
      <div className="selected-option">
        {
          selectedOptions.map((selectedOption, index) => (
            <SelectedItem key={index} {...selectedOption} removeOption={removeOption} />
          ))
        }
        <div className="menu" style={{ marginLeft: 'auto', display: 'flex', alignItems: "center" }}>
          <AiFillCloseCircle style={{ fontSize: '1.3rem' }} onClick={() => setSelectedOptions([])} />
          <span style={{ fontSize: '1.8rem', margin: '0rem 0.5rem' }}>|</span>
          {

            showOptions ? <AiOutlineCaretUp style={{ fontSize: '1.6rem' }} onClick={() => setShowOptions(!showOptions)} />
              : <AiOutlineCaretDown style={{ fontSize: '1.6rem' }} onClick={() => setShowOptions(!showOptions)} />
          }
        </div>
      </div>
      <div
        className="options"
        style={{
          display: showOptions ? 'block' : 'none'
        }}
      >
        <ul>
          {
            items.map((item, index) => (
              <IndividualItem {...item} key={index} addOption={addOption} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App