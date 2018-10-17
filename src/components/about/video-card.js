import React from 'react'

export default ({ image, text, link }) => (
  <div className="c-video-card">
    <a
      className="text-box__link"
      target="_blank"
      rel="noopener
      noreferrer"
      href={link}
    >
      <img className="c-video-card__thumbnail" src={image} />
    </a>
    <p className="c-video-card__text">{text}</p>
  </div>
)
