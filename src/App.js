import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CData from './pages/ContextApi';
import StudentData from './pages/StudentData';
import ContactUs from './pages/ContactUs';
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';

function App() {
  
  const [Data,setData] = useState([
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"},
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"},
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"},
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"},
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"},
    {Name: "John",Age: 26, Course:"MERN",Batch:"October"}
  ])
  return (
    <div className="App">
      <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Students' element = {
              <CData.Provider value={{entries : Data, updateData: setData}}>
                <StudentData/>
              </CData.Provider>
            }/>
            <Route path='/ConatctUs' element = {<ContactUs/>}/>
            <Route path = '/NewStu' element={
              <CData.Provider value={{entries : Data, updateData: setData}}>
                <AddStudent/>
              </CData.Provider>
              }/>
              <Route path = '/UpdateStu' element = {
                <CData.Provider value={{entries : Data, updateData: setData}}>
                  <UpdateStudent/>
                </CData.Provider>
                }/>
        </Routes>
    </div>
  );
}

export default App;
