import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Link from 'gatsby-link'
import extlinks from '../sign-up-links.json'
import { getLinkTo } from '../../utils/page'

//const links = ['for-talents', 'for-employers', 'community', 'login']
const links = [
  { name: 'for-talents', page: '' },
  { name: 'for-employers', page: 'tech-hiring' },
  { name: 'community', page: 'community' },
  { name: 'about-us', page: 'about' },
  { name: 'login', page: 'pages/login' },
]

export default () => {
  return (
    <NamespacesConsumer ns={['header']}>
      {t => (
        <nav className="header__nav">
          <ul className="header__link-list">
            {links.map(({ name, page }) => (
              <li key={name} className="header__link-item">
                <Link to={getLinkTo(page)}>{t(name)}</Link>
              </li>
            ))}
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
