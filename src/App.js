import React, { Component } from 'react'
import Category from './Category'
import PhotoList from './PhotoList'
import photos from './photos.json'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <>
        {/* <h1>Photo Gallery</h1> */}
        {/* <Category /> */}
        <h1>Pandas</h1>
        <PhotoList getThing={'pandas'} />

        <PhotoDetail getPhoto={'pandas'} />
      </>
    )
  }
}

export default App
