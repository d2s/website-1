import React from 'react'
import play from '../../static/play-button@2x.png'

export default ({ imageName, text, link }) => (
  <div className="c-video-card">
    <div
      className={`c-video-card__thumbnail
      c-video-card__thumbnail--${imageName}`}
    >
      <a
        className="text-box__link"
        target="_blank"
        rel="noopener
        noreferrer"
        href={link}
      >
        <img height="56" width="56" src={play} />
      </a>
    </div>
    <p className="c-video-card__text">{text}</p>
  </div>
)
