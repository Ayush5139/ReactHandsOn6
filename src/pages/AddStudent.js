import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CData from './ContextApi'
import './Home.css'

function AddStudent() {
    const dataup = useContext(CData)
    const navigate = useNavigate()
    const newdata = {
        Name:"",
        Age:"",
        Course:"",
        Batch:""
    }

    function handleChange(e) {
        newdata[e.target.name] = e.target.value
    }
    
    function handleSubmit(){
        dataup.entries.push(newdata);
        navigate('/Students')
      }
  return (
    <div>
    <div className='adddiv'>
        <input placeholder='Name' name='Name' onChange={handleChange} className='input'/>
        <input placeholder='Age' name='Age'onChange={handleChange} className='input'/>
        <input placeholder='Course' name='Course' onChange={handleChange} className='input'/>
        <input placeholder='Batch' name='Batch' onChange={handleChange} className='input'/>
    </div>
    <div>
            <button onClick={handleSubmit} className='addbut'>Submit</button>
        </div>
    </div>
  )
}

export default AddStudent

