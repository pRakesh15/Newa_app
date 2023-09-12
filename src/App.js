
import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



import Navbar1 from './component/Navbar1';
import News1 from './component/News1';
import { useState } from 'react';



function App() {
  const [toploding,setTopLoding]=useState(0)


  return (
    <div>
    <Router>
    <LoadingBar
    color='#f11946'
    progress={toploding}
  />
    <Navbar1/>
   
      
       <Routes>
       <Route exact path="/" element={ <News1 setproges={setTopLoding}   key="a" pageSize={9} category="general"/>}/>
       <Route exact path="/business" element={ <News1 setproges={setTopLoding}  key="b" pageSize={9} category="business"/>}/>
       <Route exact path="/entertainment" element={ <News1 setproges={setTopLoding}  key="c" pageSize={9} category="entertainment"/>}/>
       <Route exact path="/general" element={ <News1 setproges={setTopLoding}  key="d" pageSize={9} category="general"/>}/>
       <Route exact path="/health" element={ <News1 setproges={setTopLoding}  key="e" pageSize={9} category="health"/>}/>
       <Route exact path="/science" element={ <News1 setproges={setTopLoding}  key="f" pageSize={9} category="science"/>}/>
       <Route exact path="/sports" element={ <News1  setproges={setTopLoding} key="g" pageSize={9} category="sports"/>}/>
       <Route exact path="/technology" element={ <News1 setproges={setTopLoding}  key="h" pageSize={9} category="technology"/>}/>
    
       
       </Routes>
    </Router>
          </div>
  )
}

export default App

