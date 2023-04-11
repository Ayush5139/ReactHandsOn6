import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CData from './ContextApi'
import './Home.css'

function UpdateStudent() {
    const navigate = useNavigate()
    const dataContext =useContext(CData)
    const index = useLocation().state.Data
    console.log(index)
    console.log(dataContext)
    const update = {
        Name:dataContext.entries[index].Name ,
        Age:dataContext.entries[index].Age ,
        Course:dataContext.entries[index].Course ,
        Batch:dataContext.entries[index].Batch
    }
    function handleChange(e){
        update[e.target.name] = e.target.value
    }

    function handleSubmit(){
        dataContext.entries[index] = update
        navigate("/Students")
    }
  return (
    <div>
        <div className='adddiv'>
        <input placeholder={dataContext.entries[index].Name} name="Name" onChange={handleChange} className='input'/>
        <input placeholder={dataContext.entries[index].Age} name="Age" onChange={handleChange} className='input'/>
        <input placeholder={dataContext.entries[index].Course} name="Course" onChange={handleChange} className='input'/>
        <input placeholder={dataContext.entries[index].Batch} name="Batch" onChange={handleChange}className='input'/>
        </div>
        <div>
        <button onClick={handleSubmit} className ='addbut'>Update</button>
        </div>
    </div>
  )
}

export default UpdateStudent