import React, { Component } from 'react'
import Link from 'gatsby-link'
import { NamespacesConsumer } from 'react-i18next'

//sets up cookie info
let expireDate = new Date()
expireDate.setTime(expireDate.getTime() + 365 * 86400000)
expireDate = expireDate.toGMTString()

const cookieEntry = `cb-enabled={value}; expires=${expireDate}; path=/`
const aCookie = document.cookie.split('; ').find(cookie => {
  return cookie.startsWith('cb-enabled')
})

const isCookieAccepted = aCookie && aCookie.split('=')[1] === 'accepted'

function acceptCookie(event) {
  event.preventDefault()
  document.cookie = cookieEntry.replace('{value}', 'accepted')

  this.setState({
    accepted: true,
  })
}

export default class CookieBanner extends Component {
  constructor() {
    super()

    this.state = {
      accepted: isCookieAccepted,
    }

    this.acceptCookie = acceptCookie.bind(this)
  }

  render() {
    if (!this.state.accepted) {
      return (
        <NamespacesConsumer ns={'cookie'}>
          {t => (
            <div className="container-fluid c-cookie-banner">
              <div className="container c-cookie-banner__wrapper">
                <div className="c-cookie-banner__text">{t('text')}</div>
                <span className="c-cookie-banner__controls">
                  <a
                    className="c-cookie-banner__accept button button--white"
                    href="#"
                    onClick={this.acceptCookie}
                  >
                    {t('accept')}
                  </a>
                  <Link className="c-cookie-banner__info" to="privacy_policy">
                    {t('info')}
                  </Link>
                </span>
              </div>
            </div>
          )}
        </NamespacesConsumer>
      )
    }

    return null
  }
}
