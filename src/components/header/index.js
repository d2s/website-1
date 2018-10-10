import React from 'react'
import Navigation from './navigation'
import logo from '../../static/logo.svg'
import { getLang } from '../../utils/i18n'
import Link from 'gatsby-link'
import PageIntro from './page-intro'
import CompanyBar from './company-bar'
import getCurrentPage from '../../utils/page'
import Wrapper from '../wrapper'
import LangSwitch from '../lang-switch'
import CookieBanner from './cookie-banner'

const lang = getLang()

export default ({ smallerHeader }) => {
  const page = getCurrentPage()
  const extendedHeader =
    !smallerHeader && (page === 'index' || page === 'tech-hiring')

  return (
    <div>
      <CookieBanner />
      <header
        className={`container-fluid header header--${!smallerHeader && page}`}
      >
        <div className="header__controls container">
          <Link to="/">
            <img src={logo} className="header__logo" />
          </Link>
          <Navigation />
          <LangSwitch />
        </div>

        {extendedHeader && (
          <Wrapper nowrap>
            <PageIntro />
          </Wrapper>
        )}
      </header>
      {extendedHeader && (
        <Wrapper nowrap>
          <CompanyBar />
        </Wrapper>
      )}
    </div>
  )
}
