import React from 'react'
import { Button } from 'react-bootstrap'
import './ActivityCard.css'

const activityCard = props => {
    let style = {
        backgroundImage: 'url(' + props.img + ')'
    }

    return(
    <div className="blog-card">
    <div className="meta">
      <div className="photo" style={style}></div>
      <ul className="details">
      </ul>
    </div>
    <div className="description">
      <h1 className = "blueh1">{props.header}</h1>
      <p>{props.content}</p>
      <p className="read-more">
        <Button onClick = {props.onClickButton}>View Popular Hiking Trails</Button>
      </p>
    </div>
  </div>

)
    }

export default activityCard