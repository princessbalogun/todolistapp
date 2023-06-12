'use client'
import { useState } from "react";
import Form from '@/components/Form';
import './styles.css';
import { fadeIn, fadeOut } from 'react-animations';



const App = () => { 
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
 


  const handleSubmit = (e) => {
    e.preventDefault()
    let newItems = [...items]
    newItems.push(input)
    setItems(newItems)
    setInput('')
  }

  const deleteItem = (index) => {
    let newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div className = "container">
      
      <h1 className = "text-cutout">what are your tasks for today?</h1>

      
    
      <Form handleSubmit={handleSubmit} input={input} setInput={setInput}/>
      
      {items.map((item, index) => {
        return(
          <div>
            <h2>{item}</h2>
            <button onClick={() => deleteItem(index)}>delete</button>
          
          </div>
        )
      })}
    </div>
    
  );
};

export default App;