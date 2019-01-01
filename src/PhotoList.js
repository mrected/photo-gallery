import React, { Component } from 'react'
import photos from './newphotos.json'
import {Link} from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const categoryData = photos[this.props.match.params.category]

    return (
      <>
      <Link to="/" alt="home">Home</Link>
      
      <ul className="photolist">
          {categoryData.photos.map((photo, index) =>{
            return(
              <li key={index}>
              <Link to={`/${category}/${index}`}>
                <p>{photo.title}</p>
                  <img src={photo.imageURL} alt={photo.title} />
                </Link>
              </li>
            )
          })}
        </ul>
        </>
    )
  }
}

export default PhotoList
