import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {Routes , Route} from 'react-router';
import Categories from './Components/Categories';



export default class App extends Component {

  country = 'in'

  render() {
    return (
      <>
        <Navbar/>
        <Categories/>
      <Routes>
        <Route path='/'  element ={<News key={"general"} country={this.country} category={"general"}/>}/>
        <Route path='/sports' element={<News key={"sports"} country={this.country} category={"sports"}/>}/>
        <Route path='/business' element={<News key={"business"} country={this.country} category={"business"}/>}/>
        <Route path='/health' element={<News key={"health"} country={this.country} category={"health"}/>}/>
        <Route path='/science' element={<News key={"science"} country={this.country} category={"science"}/>}/>
      </Routes>
      </>
    )
  }
}
