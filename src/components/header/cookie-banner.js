import React from 'react'
import Link from 'gatsby-link'
import { I18n } from 'react-i18next'

export default () =>
  <I18n ns={ "cookie" }>
    {
      t =>
      <div className="container-fluid c-cookie-banner">
        <div className="container c-cookie-banner__wrapper">
          <div className="c-cookie-banner__text">{ t('text') }</div>
          <span className="c-cookie-banner__controls">
            <Link className="c-cookie-banner__accept button button--white" to="">
              { t('accept') }
            </Link>
            <Link className="c-cookie-banner__info" to="privacy_policy">
              { t('info') }
            </Link>
          </span>
        </div>
      </div>
    }
  </I18n>
