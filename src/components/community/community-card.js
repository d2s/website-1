import React from 'react'
import TextBox from './text-box'

export default ({ image, headline, text, links, color }) => (
  <div className={`c-community-card c-community-card--${color}`}>
    <img className="c-community-card__logo" src={image} />
    <div className="c-community-card__wrapper">
      <TextBox headline={headline} text={text} links={links} size={'medium'} />
    </div>
  </div>
)
