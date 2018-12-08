import React, { Component } from 'react'
import photos from './photos.json'

class Category extends Component {
  render() {
    return (
      <ul>
        {Object.keys(photos).map(category => {
          return (
            <li key={category} className="photo-list-sm">
              {console.log(photos)}
              <a href={`/${category}`}>{photos[category].title}</a>
              <br />
              <img src={photos[category].photos[0].imageURL} alt="something" />
              {console.log(photos[category].photos[0].imageURL)}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Category
