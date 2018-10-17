import React from 'react'
import Navigation from './navigation'
import logo from '../../static/logo.svg'
import { getLang } from '../../utils/i18n'
import Link from 'gatsby-link'
import PageIntro from './page-intro'
import CompanyBar from './company-bar'
import getCurrentPage, { getLinkTo } from '../../utils/page'
import Wrapper from '../wrapper'
import LangSwitch from '../lang-switch'
import CookieBanner from './cookie-banner'
import Headroom from 'react-headroom'

const lang = getLang()

export default ({ smallerHeader }) => {
  const page = getCurrentPage()
  const extendedHeader =
    !smallerHeader && (page === 'index' || page === 'tech-hiring')

  return (
    <div>
      <header
        className={`container-fluid header header--${!smallerHeader && page}`}
      >
      <Headroom>
        <div  className="container-fluid header__wrapper">
          <div className="header__controls container">
            <Link to={getLinkTo('')}>
              <img src={logo} className="header__logo" />
            </Link>
            <Navigation />
            <LangSwitch />
          </div>
        </div>
      </Headroom>
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
