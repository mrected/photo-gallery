import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import photos from './newphotos.json'


class CategoryList extends Component {
  render() {
    return (
      <>
      <Link to="/" alt="home">Home</Link>
      <ul>
          {Object.keys(photos).map(category => {
            return (
              <li key={category}>
              <Link to={`/${category}`}>{photos[category].title}</Link>
              </li>
              
            )
          })}
      </ul>
      </>
    )
  }
}

export default CategoryList
