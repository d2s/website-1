import React, { Component } from 'react'
import getCurrentPage, { getLinkTo } from '../../utils/page'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'

const component = 'page-intro'

export default class PageIntro extends Component {
  render() {
    const page = getCurrentPage()
    const color = page === 'tech-hiring' ? 'blue' : 'yellow'
    const target = page === 'index' ? 'tech-hiring' : ''
    return (
      <NamespacesConsumer ns={`${page}`}>
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
              <Link
                to={getLinkTo('sign_up')}
                className={`button button--${color}`}
              >
                {t(`${component}.button1`)}
              </Link>
              <Link to={getLinkTo(target)} className="button button--link">
                {t(`${component}.button2`)}
              </Link>
            </span>
          </div>
        )}
      </NamespacesConsumer>
    )
  }
}
