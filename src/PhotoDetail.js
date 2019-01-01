import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import photos from './newphotos.json'


class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.index
    const categoryData = photos[category]
    return <>
      <Link to="/" alt="home">Home</Link>
      &nbsp;&gt; <Link to={`/${category}`} alt={category}>{category}</Link>
      <h2>{categoryData.photos[photoIndex].title}</h2>
      <img className="full-image" src={categoryData.photos[photoIndex].imageURL} alt={categoryData.photos[photoIndex].title}/>
      <p>{categoryData.description}</p>
    </>
  } 
}

export default PhotoDetail
