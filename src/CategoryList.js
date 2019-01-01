import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import photos from './newphotos.json'


class CategoryList extends Component {
  render() {
    console.log(photos.classiccars.photos[0].imageURL)
    return (
      <>
      <Link to="/" alt="home">Home</Link>
      <ul>
          {Object.keys(photos).map(category => {
            return (
              <li key={category}>
                <p>
                  <Link to={`/${category}`}>
                  <img src={photos[category].photos[0].imageURL} alt={photos[category].photos[0].title} width="150px"/><br />
                    {photos[category].title}
                  </Link>
                </p>
              </li>
              
            )
          })}
      </ul>
      </>
    )
  }
}

export default CategoryList
