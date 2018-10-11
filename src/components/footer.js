import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import logo from '../static/logo-bear.svg'
import { languages, getLang, getPathLang } from '../utils/i18n'
import Link from 'gatsby-link'
import getCurrentPage from '../utils/page'
import LangSwitch from './lang-switch'
import facebook from '../static/icons/Facebook.png'
import github from '../static/icons/Facebook.png'
import instagram from '../static/icons/instagram.png'
import linkedin from '../static/icons/linkedin.png'
import twitter from '../static/icons/Twitter.png'
import youtube from '../static/icons/youtube.png'

const column = ['for-talents', 'for-employers', 'community']
const year = new Date().getFullYear()
// currently chosen language

export default () => {
  const plang = getPathLang()
  const prefix = '/' + (plang === '' ? '' : plang + '/')
  return (
    <NamespacesConsumer ns={['footer', 'header']}>
      {t => (
        <footer className="footer">
          <div className="footer__column">
            <div className="footer__wrapper">
              <Link to="/">
                <img src={logo} className="footer__logo" />
              </Link>
              <p>{t('copyright', { year })}</p>
              <LangSwitch />
            </div>
          </div>
          <div className="footer__column">
            <h5 className="footer__headline">
              <Link className="footer__link" to={prefix}>
                {t('header:for-talents')}
              </Link>
            </h5>
          </div>
          <div className="footer__column">
            <h5 className="footer__headline">
              <Link className="footer__link" to={`${prefix}tech-hiring`}>
                {t('header:for-employers')}
              </Link>
            </h5>
            <ul className="footer__link-list">
              <Link
                className="footer__link"
                to={`${prefix}tech-hiring#pricing`}
              >
                <li className="footer__link-item">{t('pricing')}</li>
              </Link>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__headline">
              <Link className="footer__link" to={`${prefix}about`}>
                {t('header:about-us')}
              </Link>
            </h5>
            <ul className="footer__link-list">
              <li className="footer__link-item footer__link-item--careers">
                <a
                  className="footer__link"
                  href={'https://jobs.lever.co/honeypot'}
                >
                  {t('careers')}
                </a>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link" to={`${prefix}faq`}>
                  {t('FAQ')}
                </Link>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link" to={`${prefix}legal_notice`}>
                  {t('legal_notice')}
                </Link>
              </li>
              <li className="footer__link-item">
                <Link className="footer__link" to={`${prefix}privacy_policy`}>
                  {t('privacy_policy')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__headline">
              <Link className="footer__link" to={`${prefix}community`}>
                {t('Community')}
              </Link>
            </h5>
            <ul className="footer__link-list">
              <li className="footer__link-item">
                <a className="footer__link" href={'https://blog.honeypot.io'}>
                  {t('Blog')}
                </a>
              </li>
              <li className="footer__link-item">
                <a
                  className="footer__link"
                  href={'https://www.graphql-europe.org/'}
                >
                  {t('GraphQL Europe')}
                </a>
              </li>
              <li className="footer__link-item">
                <a
                  className="footer__link"
                  href={'https://hive.honeypot.io/hive-conference-2018/'}
                >
                  {t('hive-con')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h5 className="footer__headline">{t("We're Social too!")}</h5>
            <ul className="footer__link-list">
              <li className="footer__link-item">
                <img className="footer__icon" src={twitter} />
                <a
                  className="footer__link"
                  href="https://twitter.com/honeypotio"
                >
                  Twitter
                </a>
              </li>
              <li className="footer__link-item">
                <img className="footer__icon" src={facebook} />
                <a
                  className="footer__link"
                  href="https://www.facebook.com/Honeypotio"
                >
                  Facebook
                </a>
              </li>
              <li className="footer__link-item">
                <img className="footer__icon" src={linkedin} />
                <a
                  className="footer__link"
                  href="https://www.linkedin.com/company/honeypot/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__link-item">
                <img className="footer__icon" src={github} />
                <a
                  className="footer__link"
                  href="https://github.com/honeypotio"
                >
                  Github
                </a>
              </li>
              <li className="footer__link-item">
                <img className="footer__icon" src={instagram} />
                <a
                  className="footer__link"
                  href="https://www.instagram.com/honeypot.io"
                >
                  Instagram
                </a>
              </li>
              <li className="footer__link-item">
                <img className="footer__icon" src={youtube} />
                <a
                  className="footer__link"
                  href="https://www.youtube.com/channel/UCsUalyRg43M8D60mtHe6YcA/videos"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </footer>
      )}
    </NamespacesConsumer>
  )
}
