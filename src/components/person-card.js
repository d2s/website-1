import React from 'react'

export default ({ image, name, text }) => (
  <div className="c-person-card">
    <img className="c-person-card__image" src={image} />
    <h4 className="c-person-card__name">{name}</h4>
    <p className="c-person-card__text">{text}</p>
  </div>
)
