import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import arrow from '../../static/arrow_blue.svg'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box">
        <h2 className="text-box__headline">{t('news.headline')}</h2>
        <div className="text-box__wrapper">
          <span>
            <p className="text-box__text">{t('news.left.text')}</p>
            <a className="text-box__link" href={t('news.left.link')}>
              {t('news.left.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
          <span>
            <p className="text-box__text">{t('news.right.text')}</p>
            <a className="text-box__link" href={t('news.right.link')}>
              {t('news.right.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
        </div>
        <div className="text-box__logos" />
      </div>
    )}
  </NamespacesConsumer>
)
