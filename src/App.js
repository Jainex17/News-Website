import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = "9";
  render() {
    return (
      <div>
        {/* <News key="entertainment" pageSize={6}  Country="in" Category="entertainment"/> */}
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key="general" pageSize={this.pageSize}  Country="in" Category="general"/> }/>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize}  Country="in" Category="business"/>}/> 
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize}  Country="in" Category="entertainment"/>}/> 
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize}  Country="in" Category="health"/>}/> 
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize}  Country="in" Category="science"/>}/> 
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize}  Country="in" Category="sports"/>}/> 
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize}  Country="in" Category="technology"/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

