import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import lilipad from '../../static/Lilipad-logo.png'
import redi from '../../static/Redi_School_Logo.png'
import serve from '../../static/Serve_the_City_Logo.png'
import links from './care-links.json'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box">
        <h2 className="text-box__headline">{t('care.headline')}</h2>
        <p className="text-box__text">{t('care.text')}</p>
        <div className="text-box__wrapper">
          {[
            [lilipad, links.lilipad],
            [redi, links.redi],
            [serve, links.serve],
          ].map(([image, link], i) => (
            <a
              href={link}
              key={i}
              target="_blank"
              rel="noopener
              noreferrer"
            >
              <img className="text-box__image" src={image} />
            </a>
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
