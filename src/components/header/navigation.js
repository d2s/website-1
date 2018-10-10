import React from 'react'
import { I18n } from 'react-i18next'
import Link from 'gatsby-link';
import { getPathLang } from '../../utils/i18n';

//const links = ['for-talents', 'for-employers', 'community', 'login']
const links = [
  { name: 'for-talents', page: '' },
  { name: 'for-employers', page: 'tech-hiring' },
  { name: 'community', page: 'community' },
  { name: 'login', page: 'pages/login' }
];

export default () => {
  const lang = getPathLang();
  const prefix = lang ? lang + '/' : lang;
  return (
  <I18n ns={['header']}>
    {t => (
      <nav className="header__nav">
        <ul className="header__link-list">
          {links.map(({name, page}) => (
            <li key={name} className="header__link-item">
              <Link to={ prefix+page }>
                {t(name)}
              </Link>
            </li>
          ))}
          <li className="header__link-item">
            <Link className="button button--primary header__link-item--button" to={ 'pages/sign_up' }>
              {t('sign-up')}
            </Link>
          </li>
        </ul>
      </nav>
    )}
  </I18n>
)}
