import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import extlinks from '../sign-up-links.json'
import getCurrentPage, { getLinkTo } from '../../utils/page'

//const links = ['index', 'tech-hiring', 'community', 'login']
const links = [
  { name: 'index', link: '' },
  { name: 'tech-hiring', link: 'tech-hiring' },
  { name: 'community', link: 'community' },
  { name: 'about', link: 'about' },
]

export default ({ page }) => {
  return (
    <NamespacesConsumer ns={['header']}>
      {t => (
        <nav className="header__nav">
          <ul className="header__link-list">
            {links.map(({ name, link }) => (
              <li key={name} className="header__link-item">
                <Link
                  className={`text-link ${
                    name === page ? 'header__link-item--active' : ''
                  }`}
                  to={getLinkTo(link)}
                >
                  {t(name)}
                </Link>
              </li>
            ))}
            <li className="header__link-item">
              <a
                className="text-link"
                target="_blank"
                rel="noopener
                noreferrer"
                href="https://app.honeypot.io/users/login"
              >
                {t('login')}
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="button button--primary header__link-item--button"
                target="_blank"
                rel="noopener
                noreferrer"
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
