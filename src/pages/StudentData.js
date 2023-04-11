import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CData from './ContextApi'
import Nav from './Nav'
import './Home.css'

function StudentData() {
    const dataContext = useContext(CData)
    console.log(dataContext)
    const navigate = useNavigate();
  return (
    <div>
        <Nav/>
        <div className='studiv1'>
            <h2 className='stuh2'>
                Student Details
            </h2>
            <button onClick={()=>{navigate("/NewStu")}} className='stubtn1'>Add New Student</button>
            </div>
            <div> 
            <table className='stutab'>
                            <thead>
                                <th className='name'>Name</th>
                                <th className='name'>Age</th>
                                <th className='name'>Course</th>
                                <th className='name'>Batch</th>
                                <th className='name'>Change</th>
                            </thead>
            {
                dataContext.entries.map((item,index)=>{
                    return(
                            <tbody key={index}>
                            <tr>
                            <td className='sub'>{item.Name}</td>
                            <td className='sub'>{item.Age}</td>
                            <td className='sub'>{item.Course}</td>
                            <td className='sub'>{item.Batch}</td>
                            <td className='sub'><Link to='/UpdateStu' state={{Data:index}}>Edit</Link></td>
                            </tr>
                            </tbody>
                    )
                })
            }
            </table>
        </div>
    </div>
  )
}

export default StudentData