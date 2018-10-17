import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import arrow from '../../static/arrow_blue.svg'
import ww from '../../static/Wirtschafts_Woche_Logo.png'
import tc from '../../static/Logo_TechCrunch.png'
import gs from '../../static/Logo_Grunderszene.png'
import ent from '../../static/Entwickler_Logo.png'
import hun from '../../static/Hundert_Logo.jpg'
import vb from '../../static/Logo_VB.png'
import bp from '../../static/Business_Punk_Logo.png'
import forb from '../../static/Logo_Forbes.png'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box c-news-text" id="press">
        <h2 className="text-box__headline">{t('news.headline')}</h2>
        <div className="text-box__wrapper">
          <span className="c-news-text__wrapper">
            <p className="text-box__text">{t('news.left.text')}</p>
            <a className="text-box__link" href={t('news.left.link')}>
              {t('news.left.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
          <span className="c-news-text__wrapper">
            <p className="text-box__text">{t('news.right.text')}</p>
            <a className="text-box__link" href={t('news.right.link')}>
              {t('news.right.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
        </div>
        <div className="c-news-text__references">
          {[forb, tc, gs, ent, ww, hun, bp, vb].map((image, i) => (
            <img className="text-box__image" key={i.toString()} src={image} />
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)
