import React from 'react'
import arrow from '../../static/arrow_blue.svg'

export default ({ headline, text, links, small, size }) => {
  let headlineClass = 'text-box__headline '
  if (small) {
    headlineClass += 'text-box__headline--small'
  } else if (size) {
    headlineClass += `text-box__headline--${size}`
  }
  return (
    <div className="text-box">
      <h2 className={headlineClass}>{headline}</h2>
      <p className="text-box__text">{text}</p>
      {links && links.length > 0 && links.map(([link, text], i) =>
        <a key={i} className="text-box__link" href={link}>
          {text}
          <img className="text-box__arrow" src={arrow} />
        </a>
      )}
    </div>
  )
}
