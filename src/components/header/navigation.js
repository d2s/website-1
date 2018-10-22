import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import extlinks from '../sign-up-links.json'
import getCurrentPage, { getLinkTo } from '../../utils/page'

//const links = ['index', 'tech-hiring', 'community', 'login']
const links = [
  { name: 'index', page: '' },
  { name: 'tech-hiring', page: 'tech-hiring' },
  { name: 'community', page: 'community' },
  { name: 'about', page: 'about' },
]

export default () => {
  return (
    <NamespacesConsumer ns={['header']}>
      {t => (
        <nav className="header__nav">
          <ul className="header__link-list">
            {links.map(({ name, page }) => (
              <li key={name} className="header__link-item">
                <Link
                  className={`text-link ${
                    name === getCurrentPage() ? 'header__link-item--active' : ''
                  }`}
                  to={getLinkTo(page)}
                >
                  {t(name)}
                </Link>
              </li>
            ))}
            <li className="header__link-item">
              <a
                className="text-link"
                href="https://app.honeypot.io/users/login"
              >
                {t('login')}
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="button button--primary header__link-item--button"
                href={extlinks.index}
              >
                {t('sign-up')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </NamespacesConsumer>
  )
}
