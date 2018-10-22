import React from 'react'

export default ({ map, link, show, city, address }) => (
  <div className="c-location-card c-card">
    <img src={map} />
    <div className="c-location-card__wrapper">
      <h4 className="c-location-card__city">{city}</h4>
      <p className="c-location-card__address">{address}</p>
      <a
        target="_blank"
        rel="noopener
        noreferrer"
        href={link}
        className="c-location-card__address"
      >
        {show}
      </a>
    </div>
  </div>
)
