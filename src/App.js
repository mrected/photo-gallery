import React, { Component } from 'react'
import {BrowserRouter as Router,  Route } from 'react-router-dom'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'
import CategoryList from './CategoryList';

class App extends Component {
  render() {
    return (
      <>
        
        <Router>
          <>
            <h1>Photo Gallery</h1>
            <Route exact path="/" component = {CategoryList}/>
            <Route exact path="/:category" component = {PhotoList} />
            <Route path="/:category/:index" component = {PhotoDetail} />
          </>
        </Router>
      </>
    )
  }
}

export default App
