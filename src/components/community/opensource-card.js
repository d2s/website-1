import React from 'react'
import star from '../../static/star.png'

export default ({ headline, text, link, link_text, stars, image }) => (
  <div className="c-opensource-card">
    <img className="c-opensource-card__image" src={image} />
    <h4>{headline}</h4>
    <p>{text}</p>
    <div className="c-opensource-card__info">
      <a href={link}>{link_text}</a>
      <span className="c-opensource-card__gh_stars">
        {stars}
        <img className="c-opensource-card__star_icon" src={star} />
      </span>
    </div>
  </div>
)
