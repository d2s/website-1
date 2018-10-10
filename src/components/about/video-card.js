import React from 'react'

export default ({ image, text }) => (
  <div className="c-video-card">
    <img className="c-video-card__thumbnail" src={image} />
    <p className="c-video-card__text">{text}</p>
  </div>
)
