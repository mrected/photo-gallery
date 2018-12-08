import React, { Component } from 'react'
import photos from './photos.json'

class PhotoList extends Component {
  render() {
    return (
      <>
        {photos[this.props.getThing].photos.map((photo, index) => {
          return (
            <li className="photo-list-sm" key={index}>
              <p>{photo.title}</p>
              <a href="#">
                <img src={photo.imageURL} alt={this.props.getThing} />
              </a>
            </li>
          )
        })}
      </>
    )
  }
}

export default PhotoList
