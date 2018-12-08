import React, { Component } from 'react'

import photos from './photos.json'

class PhotoDetail extends Component {
  render() {
    return <h1>{this.props.getPhoto}</h1>
  }
}

export default PhotoDetail
