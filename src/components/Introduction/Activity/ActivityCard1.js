import React from 'react'
import './ActivityCard.css'

const activityCard1 = props => {
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
    </div>
  </div>

)
    }

export default activityCard1