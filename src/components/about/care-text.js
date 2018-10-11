import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import lilipad from '../../static/lilipad.png'
import redi from '../../static/redi.jpg'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box">
        <h2 className="text-box__headline">{t('care.headline')}</h2>
        <p className="text-box__text">{t('care.text')}</p>
        <div className="text-box__wrapper">
          {[lilipad, redi].map((image, i) => (
            <img className="text-box__image" key={i.toString()} src={image} />
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
