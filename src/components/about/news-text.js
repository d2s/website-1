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
import {
  left,
  right,
  forbes,
  TechChrunch,
  Gruenderszene,
  Entwickler,
  TheHundert,
  VentureBeat,
  BusinessPunk,
  WirtschaftsWoche,
} from './news-links.json'
import { withPrefix } from 'gatsby'

export default () => (
  <NamespacesConsumer ns={'about'}>
    {t => (
      <div className="text-box c-news-text" id="press">
        <h2 className="text-box__headline">{t('news.headline')}</h2>
        <div className="text-box__wrapper c-news-text__container">
          <span className="c-news-text__wrapper">
            <p className="text-box__text">{t('news.left.text')}</p>
            <a
              className="text-box__link"
              target="_blank"
              rel="noopener
              noreferrer"
              href={left}
            >
              {t('news.left.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
          <span className="c-news-text__wrapper">
            <p className="text-box__text">{t('news.right.text')}</p>
            <a
              className="text-box__link"
              href={right}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('news.right.show')}
              <img className="text-box__arrow" src={arrow} />
            </a>
          </span>
        </div>
        <div className="c-news-text__references">
          {[
            [forb, forbes],
            [tc, TechChrunch],
            [gs, Gruenderszene],
            [ent, Entwickler],
            [ww, WirtschaftsWoche],
            [hun, TheHundert],
            [bp, BusinessPunk],
            [vb, VentureBeat],
          ].map(([image, link], i) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={i}>
              <img className="text-box__image" src={image} />
            </a>
          ))}
        </div>
        <a
          className="text-box__link"
          download
          href={withPrefix('/honeypot_logo.png')}
        >
          Download our Logo
        </a>
      </div>
    )}
  </NamespacesConsumer>
)
