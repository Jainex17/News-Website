import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = "9";
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 100
  }

  setprogress = (progress)=>{
    this.setState ({
      progress:progress
    })
  } 

  render() {
    return (
      <div>
        {/* <News apikey={this.apiKey} setprogress={this.setprogress}  key="entertainment" pageSize={6}  Country="in" Category="entertainment"/> */}
        <BrowserRouter>
        <LoadingBar
        color='#FF0000'
        progress={this.state.progress}
      />
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News apikey={this.apiKey} setprogress={this.setprogress}  key="general" pageSize={this.pageSize}  Country="in" Category="General"/> }/>
          <Route exact path="/business" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="business" pageSize={this.pageSize}  Country="in" Category="Business"/>}/> 
          <Route exact path="/entertainment" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="entertainment" pageSize={this.pageSize}  Country="in" Category="Entertainment"/>}/> 
          <Route exact path="/health" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="health" pageSize={this.pageSize}  Country="in" Category="Health"/>}/> 
          <Route exact path="/science" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="science" pageSize={this.pageSize}  Country="in" Category="Science"/>}/> 
          <Route exact path="/sports" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="sports" pageSize={this.pageSize}  Country="in" Category="Sports"/>}/> 
          <Route exact path="/technology" element={<News apikey={this.apiKey} setprogress={this.setprogress}  key="technology" pageSize={this.pageSize}  Country="in" Category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

