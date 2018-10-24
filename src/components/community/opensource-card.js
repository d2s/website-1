import React from 'react'
import star from '../../static/star.png'

export default ({ headline, text, link, link_text, image }) => (
  <div className="c-opensource-card">
    <img className="c-opensource-card__image" src={image} />
    <h4>{headline}</h4>
    <p>{text}</p>
    <div className="c-opensource-card__info">
      <a
        target="_blank"
        rel="noopener
        noreferrer"
        href={link}
      >
        {link_text}
      </a>
    </div>
  </div>
)
