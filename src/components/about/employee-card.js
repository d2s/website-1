import React from 'react'

export default ({ image, name, position, hover }) => (
  <div className="c-employee-card">
    <img
      className="c-employee-card__avatar"
      src={image}
      onMouseOver={e => (e.currentTarget.src = hover)}
      onMouseOut={e => (e.currentTarget.src = image)}
    />
    <h4 className="c-employee-card__name">{name}</h4>
    <p className="c-employee-card__position">{position}</p>
  </div>
)
