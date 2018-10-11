import React from 'react'
import Link from 'gatsby-link'
import arrow from '../../static/arrow_blue.svg'

export default ({headline, text, link, link_text, small}) => {
  const headlineClass = `text-box__headline text-box__headline--${
    small ? 'small' : ''
  }`
  return (
  <div className="text-box">
    <h2 className={headlineClass}>{ headline }</h2>
    <p className="text-box__text">{ text }</p>
    {link && (
      <Link className="text-box__link" to={ link }>
        { link_text }
        <img className="text-box__arrow" src={arrow} />
      </Link>
    )}
  </div>)
}

