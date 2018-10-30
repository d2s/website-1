import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n, { getLang } from '../utils/i18n'
import Seo from '../components/seo'
import Header from '../components/header/'
import Footer from '../components/footer'
import '../styles/main.scss'

export default ({ smallerHeader, children, page, lang }) => (
  <I18nextProvider i18n={i18n} initialLanguage={lang}>
    <div>
      <Seo page={page} lang={lang} />
      <Header smallerHeader={smallerHeader} page={page} />
      <div className="body">{children}</div>
      <Footer />
    </div>
  </I18nextProvider>
)
