import React, { Component } from 'react'
import getCurrentPage, { getLinkTo } from '../../utils/page'
import { NamespacesConsumer } from 'react-i18next'
import links from '../sign-up-links.json'
import Link from 'gatsby-link'

const component = 'page-intro'

export default () => {
  const page = getCurrentPage()
  const color = page === 'tech-hiring' ? 'blue' : 'yellow'
  const target = page === 'index' ? 'tech-hiring' : ''
  console.log(`"${page}", "${color}"`)
  return (
    <NamespacesConsumer ns={page}>
      {t => (
        <div className="page-intro">
          {/* <div className="page-intro__note">Note</div> */}
          <h1 className="page-intro__headline">
            {t(`${component}.headline1`)}
            <br />
            <b>{t(`${component}.headline2`)}</b>
          </h1>
          <p className="page-intro__tagline">{t(`${component}.tagline`)}</p>
          <span className="page-intro__button-bar">
            <a href={links[page]} className={`button button--${color}`}>
              {t(`${component}.button1`)}
            </a>
            <Link to={getLinkTo(target)} className="button button--link">
              {t(`${component}.button2`)}
            </Link>
          </span>
        </div>
      )}
    </NamespacesConsumer>
  )
}
