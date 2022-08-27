import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter,Routes,Route} from "react-router-dom";

const App =()=> {
  const pageSize = "9";
  const apiKey = process.env.REACT_APP_API_KEY;
  
  const [progress, setProgress] = useState(0)
    return (
      <div>
        {/* <News apikey={apiKey} setprogress={setProgress}  key="entertainment" pageSize={6}  Country="in" Category="entertainment"/> */}
        <BrowserRouter>
        <LoadingBar
        color='#FF0000'
        progress={progress}
      />
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News apikey={apiKey} setprogress={setProgress}  key="general" pageSize={pageSize}  Country="in" Category="General"/> }/>
          <Route exact path="/business" element={<News apikey={apiKey} setprogress={setProgress}  key="business" pageSize={pageSize}  Country="in" Category="Business"/>}/> 
          <Route exact path="/entertainment" element={<News apikey={apiKey} setprogress={setProgress}  key="entertainment" pageSize={pageSize}  Country="in" Category="Entertainment"/>}/> 
          <Route exact path="/health" element={<News apikey={apiKey} setprogress={setProgress}  key="health" pageSize={pageSize}  Country="in" Category="Health"/>}/> 
          <Route exact path="/science" element={<News apikey={apiKey} setprogress={setProgress}  key="science" pageSize={pageSize}  Country="in" Category="Science"/>}/> 
          <Route exact path="/sports" element={<News apikey={apiKey} setprogress={setProgress}  key="sports" pageSize={pageSize}  Country="in" Category="Sports"/>}/> 
          <Route exact path="/technology" element={<News apikey={apiKey} setprogress={setProgress}  key="technology" pageSize={pageSize}  Country="in" Category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    )

}

export default App;