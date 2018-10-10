import React from 'react'
import { NamespacesConsumer } from 'react-i18next'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box">
        <h2 className="text-box__headline">{t('care.headline')}</h2>
        <p className="text-box__text">{t('care.text')}</p>
        <div className="text-box__logos"></div>
      </div>
    )}
  </NamespacesConsumer>
)
